import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";
import type { brandRankProp, brandRankProps } from "@/interface/brand";
import { useRouter } from "next/router";

function brandRank({ props }: brandRankProp) {
  const router = useRouter();
  const [slideState, setSlideState] = React.useState(0);
  const [animateime, setAnimateTime] = React.useState(0.5);

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
  if (!props) {
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
            {props.map((object: brandRankProps, index: number) => (
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
                onClick={() => router.push(object.brandUrl)}
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

export default React.memo(brandRank);
