import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RightButton({ setClickButton }: function) {
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
          //로그인이 되어 있을 경우에만 글쓰기 가능.
          if (session.isLoggedIn) {
            router.push(`${process.env.NEXT_PUBLIC_IP}/board/write`);
          } else {
            alert("로그인 후 이용해주세요.");
            router.push(`${process.env.NEXT_PUBLIC_IP}/login`);
          }
        }}
      >
        글쓰기
      </Button>
    </Box>
  );
}
