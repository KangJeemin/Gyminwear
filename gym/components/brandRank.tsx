import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";

function brandRank() {
  const [slideState, setSlideState] = React.useState(0);
  const [animateime, setAnimateTime] = React.useState(0.5);
  const rank = [
    {
      brandname: "본투윈",
      rank: +3,
    },
    {
      brandname: "프리덤",
      rank: 0,
    },
    {
      brandname: "UNF",
      rank: -1,
    },
    {
      brandname: "피지컬크라운",
      rank: "new",
    },
    {
      brandname: "키카그리도",
      rank: +2,
    },
    {
      brandname: "덤브스트럭",
      rank: 0,
    },
    {
      brandname: "허그본",
      rank: +1,
    },
    {
      brandname: "피지코어패럴",
      rank: -1,
    },
    {
      brandname: "머슬암드",
      rank: -1,
    },
    {
      brandname: "골드앤머신",
      rank: +4,
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (slideState === -135) {
        setAnimateTime(0);
        setSlideState(0);
        setTimeout(() => {
          setAnimateTime(0.5);
        }, 100);
      } else {
        setSlideState((state) => state - 15);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [slideState]);
  if (!rank) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  } else {
    return (
      <Container sx={{ height: 15, marginTop: 1 }}>
        <Box
          sx={{
            width: "100%",
            color: "black",
            height: "auto",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 15,
              overflowY: "hidden",
            }}
          >
            {rank.map((object, index) => (
              <motion.div
                style={{
                  height: 15,
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "relative",
                  top: 0,
                }}
                animate={{ top: slideState }}
                transition={{
                  duration: animateime,
                  ease: "linear",
                }}
              >
                <span>
                  <p style={{ fontWeight: "bold" }}>{index + 1}등 :</p>
                </span>
                <Box sx={{ width: { xs: "30%", md: "10%" } }}>
                  {object.brandname}
                </Box>
                {object.rank > 0 ? (
                  <>
                    <span style={{ color: "red" }}>&#9650;</span>
                    <span>{object.rank}</span>
                  </>
                ) : object.rank < 0 ? (
                  <>
                    <span style={{ color: "blue" }}>&#9660;</span>
                    <span>
                      {typeof object.rank === "number"
                        ? object.rank
                        : Math.abs(Number(object.rank))}
                    </span>
                  </>
                ) : object.rank === 0 ? (
                  <>
                    <span>&#10134;</span>
                  </>
                ) : (
                  <>
                    <span style={{ fontStyle: "italic", color: "#00D1FF" }}>
                      new
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </Box>
      </Container>
    );
  }
}

export default brandRank;
