import * as React from "react";
import BrandRank from "@/components/brandRank";
import axios from "axios";
import { brandArray } from "@/components/BrandNavigate";
import type { brandRankProps } from "@/interface/brand";
import returnRanking from "@/lib/returnRanking";

const BrandRankContainer = () => {
  const [props, setProps] = React.useState(Array<brandRankProps>);
  React.useEffect(() => {
    makeArrayInProps();
  }, []);

  const makeArrayInProps = React.useCallback(() => {
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

        const brandRankingResult = returnRanking(todayArray, yesterDayArray);
        const resultArray: Array<brandRankProps> = todayArray
          .slice(0, 10)
          .map((index: number) => ({
            brandname: brandArray[index].brandname,
            rank: brandRankingResult[index],
            brandUrl: brandArray[index].brandUrl,
          }));
        setProps(resultArray);
      });
  }, []);

  return <BrandRank props={props}></BrandRank>;
};

export default React.memo(BrandRankContainer);
