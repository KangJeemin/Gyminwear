import * as React from "react";
import BrandRank from "@/components/brandRank";
import axios from "axios";
import ranking2 from "../lib/ranking2";
import { brandArray } from "@/components/PageNavigate";

const BrandRankContainer = () => {
  const [props, setProps] = React.useState(Array);
  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_IP}/api/brand/rank`)
      .then((response) => {
        const todayArray: Array<number> = Object.values(response.data[0]);
        const yesterDayArray: Array<number> = Object.values(response.data[1]);
        const brandRankingResult = ranking2(todayArray, yesterDayArray);
        const resultArray = [];
        for (let i = 0; i < 10; i++) {
          resultArray.push({
            brandname: brandArray[todayArray[i]].brandname,
            rank: brandRankingResult[i],
          });
        }
        setProps(resultArray);
      });
  }, []);

  return <BrandRank props={props}></BrandRank>;
};

export default BrandRankContainer;
