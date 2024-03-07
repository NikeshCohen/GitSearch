import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function Loading() {
  // Handles the loading state for the app and commit modal
  return (
    <Box sx={{ display: "flex" }} className="loading">
      <CircularProgress
        style={{ color: "#3492fa", width: "70px", height: "70px" }}
      />
    </Box>
  );
}
