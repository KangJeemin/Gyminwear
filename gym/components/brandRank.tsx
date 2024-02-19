import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";

function brandRank({ rank, brand }: any) {
  //   if (!(rank || brand)) {
  //     return (
  //       <Box sx={{ width: 300 }}>
  //         <Skeleton />
  //         <Skeleton animation="wave" />
  //         <Skeleton animation={false} />
  //       </Box>
  //     );
  //   } else {
  const [slideState, setSlideState] = React.useState(0);
  function test() {
    setTimeout(() => {
      setSlideState((state) => state - 25);
      console.log(slideState);
    }, 3000);
  }
  React.useEffect(() => {
    test();
  });

  return (
    <Container sx={{ marginTop: 1 }}>
      <motion.div
        style={{ height: 25, overflowY: "hidden" }}
        animate={{ top: `${slideState}` }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            color: "black",
            fontWeight: "bold",
            justifyContent: "flex-end",
            fontSize: 14,
            height: 25,
          }}
        >
          <span>
            <p style={{ fontWeight: "bold" }}>1등 :</p>
          </span>
          <Box sx={{ width: { xs: "30%", md: "10%" } }}>프리덤애슬레틱</Box>
          <span style={{ color: "red" }}>&#9650;</span>
          <span>3</span>
          {/* <span style={{ color: "blue" }}>&#9660;</span> */}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            color: "black",
            fontWeight: "bold",
            justifyContent: "flex-end",
            fontSize: 14,
            height: 25,
          }}
        >
          <span>
            <p style={{ fontWeight: "bold" }}>2등 :</p>
          </span>
          <Box sx={{ width: { xs: "30%", md: "10%" } }}>본투윈</Box>
          <span style={{ color: "red" }}>&#9650;</span>
          <span>3</span>
          {/* <span style={{ color: "blue" }}>&#9660;</span> */}
        </Box>
      </motion.div>
    </Container>
  );
  //   }
}

export default brandRank;
