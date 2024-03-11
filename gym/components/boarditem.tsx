import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import DateTimeFormatter from "@/lib/dateTimeFomatter";
import { extractFirstImageUrl2 } from "@/lib/extractFirstImageUrl";
import gyminwearImageLogo from "@/public/image/gyminwearLogo.png";

const getImageUrl = (Imagedummy: string) => {
  if (extractFirstImageUrl2(Imagedummy)) {
    return extractFirstImageUrl2(Imagedummy);
  } else {
    return gyminwearImageLogo;
  }
};
export default function BoardItem(object: any) {
  return (
    <Grid
      xs={4}
      sm={4}
      md={5}
      //   onClick={() => {
      //     fetch(
      //       `${process.env.NEXT_PUBLIC_IP}/api/boardCount?id=${object.postid}`
      //     );
      //     router.push(
      //       `${process.env.NEXT_PUBLIC_IP}/board/read?id=${object.postid}`
      //     );
      //   }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", xl: "column" },
          width: { xs: "100%", xl: "auto" },
          height: { xs: "100px", xl: "300px" },
          // borderBottom: { xs: 1, xl: "none" },
          border: 1,
        }}
      >
        <Box
          sx={{
            order: { xs: 2, md: 1 },
            width: { xs: "30%", xl: "200px" },
            height: { xs: "100%", xl: "200px" },
            marginLeft: { xl: "22px" },
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <Image
            src={getImageUrl(object.content) || ""}
            alt="유저가 올린 사진"
            layout="fill"
          />
        </Box>
        <Box
          sx={{
            order: { xs: 1, md: 2 },
            width: { xs: "70%", xl: "220px" },
            height: { xs: "100%", xl: "100px" },
            paddingTop: { xl: "10px" },
            paddingLeft: { xl: "10px" },
            fontFamily: "monospace",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "35px",
              display: "flex",
            }}
          >
            <h4>{object.title}</h4>
            <Box
              sx={{
                color: "red",
              }}
            >
              [{object.commentcount}]
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "30px",
              color: "#8E8E8E",
            }}
          >
            {object.nickname}
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "30%",
                height: "20px",
                fontSize: 15,
              }}
            >
              <h5>조회:{object.viewcount}</h5>
            </Box>
            <Box
              sx={{
                width: "70%",
                height: "20px",
                display: "flex",
                justifyContent: "flex-end",
                fontSize: 15,
                marginRight: { xs: "10px" },
              }}
            >
              <DateTimeFormatter dateString={object.date} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
