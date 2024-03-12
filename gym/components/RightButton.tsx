import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SetterOrUpdater } from "recoil";

type HandleBoardClick = () => void;

export default function RightButton({
  handleWriteClick,
}: {
  handleWriteClick: HandleBoardClick;
}) {
  return (
    <Box
      sx={{
        justifyContent: "flex-end",
        display: "flex",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Button
        variant="outlined"
        onClick={() => {
          handleWriteClick();
        }}
      >
        글쓰기
      </Button>
    </Box>
  );
}
