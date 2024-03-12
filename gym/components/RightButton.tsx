import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SetterOrUpdater } from "recoil";

type SetWriteClickType = SetterOrUpdater<boolean>;

export default function RightButton({
  setWriteClick,
}: {
  setWriteClick: SetWriteClickType;
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
          setWriteClick((preState) => !preState);
        }}
      >
        글쓰기
      </Button>
    </Box>
  );
}
