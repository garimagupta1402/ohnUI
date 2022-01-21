import LeftContainer from "./leftContainer";
import { Box } from "@mui/material";

function DashboardContainer(Props: any) {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Box>
        <LeftContainer />
      </Box>
      <Box>{Props.children}</Box>
    </Box>
  );
}
export default DashboardContainer;
