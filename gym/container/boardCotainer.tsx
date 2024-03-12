import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { extractFirstImageUrl2 } from "@/lib/extractFirstImageUrl";
import useSession from "@/lib/useSession";
import gyminwearImageLogo from "@/public/image/gyminwearLogo.png";
import type { boardInfo, boardProps, readInfo } from "@/interface/board";
import axios from "axios";
import Link from "next/link";
// import BoardItem from "@/components/boarditem";
import RightButton from "@/components/RightButton";
import { useRecoilState } from "recoil";
import { writeClick } from "@/modules/board";
import PageNation from "@/components/PageNation";
import { useCallback, useEffect } from "react";
import { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
const BoardItem = dynamic(() => import("@/components/boarditem"), {
  loading: () => <p>Loading...</p>,
});

interface boardComponentProps extends boardProps {
  mapcount: number;
}
export default function BoardContainer(props: boardComponentProps) {
  const router = useRouter();
  const { session } = useSession();

  // 글쓰기 눌렀을때 로그인 여부 확인.
  const handleWriteClick = useCallback(() => {
    if (session.isLoggedIn) {
      router.push(`${process.env.NEXT_PUBLIC_IP}/board/write`);
    } else {
      alert("로그인 후 이용해주세요.");
      router.push(`${process.env.NEXT_PUBLIC_IP}/login`);
    }
  }, []);

  const getImageUrl = useCallback(
    (Imagedummy: string): string | null | StaticImageData => {
      if (extractFirstImageUrl2(Imagedummy)) {
        return extractFirstImageUrl2(Imagedummy);
      } else {
        return gyminwearImageLogo;
      }
    },
    []
  );

  const handleBoardClick = (props: boardInfo) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_IP}/api/boardCount?id=${props.postid}`
    );
    router.push(`${process.env.NEXT_PUBLIC_IP}/board/read?id=${props.postid}`);
  };

  const handlePageChange = (page: number) => {
    router.push(`${process.env.NEXT_PUBLIC_IP}/board?page=${page}`);
  };

  return (
    <>
      <Container
        sx={{
          color: "black",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            color: "black",
            marginTop: "20px",
            fontWeight: "bold",
            borderBottom: 1,
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <Link href={`${process.env.NEXT_PUBLIC_IP}/board?page=1`}>
            <h2>게시판</h2>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, xl: 2 }}
            columns={{ xs: 4, sm: 4, md: 20 }}
          >
            {props.data.slice(0, props.mapcount).map((object: boardInfo) => (
              <BoardItem
                object={object}
                getImageUrl={getImageUrl}
                handleBoardClick={handleBoardClick}
              />
            ))}
          </Grid>
        </Box>
        <RightButton handleWriteClick={handleWriteClick} />
      </Container>
      {props.mapcount < 5 ? null : (
        <PageNation
          pagecount={props.data[0].pagecount}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
}
