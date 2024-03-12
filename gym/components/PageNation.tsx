import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

type PageNationProps = {
  pagecount: number;
  handlePageChange: (page: number) => void;
};

export default function PageNation({
  pagecount,
  handlePageChange,
}: PageNationProps) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "cetner",
      }}
    >
      <Stack spacing={10} sx={{ margin: "auto" }}>
        <Pagination
          count={Math.floor(pagecount / 20) + 1}
          shape="rounded"
          onChange={(event, page) => {
            handlePageChange(page);
          }}
        />
      </Stack>
    </Box>
  );
}
