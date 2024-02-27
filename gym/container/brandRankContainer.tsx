import * as React from "react";
import BrandRank from "@/components/brandRank";
import axios from "axios";
import ranking2 from "../lib/ranking2";
import { brandArray } from "@/components/PageNavigate";

const BrandRankContainer = () => {
  const [props, setProps] = React.useState(Array<object>);
  React.useEffect(() => {
    makeArrayInProps();
  }, []);

  const makeArrayInProps = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_IP}/api/brand/rank`)
      .then((response) => {
        // brandArray에서의 첫번째 브랜드 순서가 0번째 부터 시작하고, 데이터베이스에 담겨 있는 브랜드 id는 1부터 시작하기 때문에, 데이터베이스에 있는 브랜드 값을 가져올때 id에 -1을 하여 brandArray의 순서와 맞쳐줌.
        const todayArray: Array<number> = Object.values(response.data[0]).map(
          (value) => (value as number) - 1
        );
        const yesterDayArray: Array<number> = Object.values(
          response.data[1]
        ).map((value) => (value as number) - 1);
        const brandRankingResult = ranking2(todayArray, yesterDayArray);
        const resultArray = [];
        for (let i = 0; i < 10; i++) {
          resultArray.push({
            brandname: brandArray[todayArray[i]].brandname,
            rank: brandRankingResult[i],
            brandUrl: brandArray[todayArray[i]].brandUrl,
          });
        }
        setProps(resultArray);
      });
  };

  return <BrandRank props={props}></BrandRank>;
};

export default React.memo(BrandRankContainer);
