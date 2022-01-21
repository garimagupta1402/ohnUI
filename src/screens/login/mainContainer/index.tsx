import RightContainer from "../Rightcontainer";
import { Box } from "@mui/material";

function MainContainer(Props: any) {
  return (
    <div>
      <Box sx={{ width: "100%", display:'flex' }}>
        <Box sx={{ width: "50%" }}>{Props.children}</Box>
        <Box sx={{ width: "50%" }}>
          <RightContainer />
        </Box>
      </Box>
    </div>
  );
}

export default MainContainer;
