import { Box, Typography, useTheme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: {
      display: "flex",
    },
    topBox: {
      width: "1650px",
      height: "94px",
    background: "#eeeaf2",
    },
    propHeading: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "30px !important",
      lineHeight: "35px",
      color: "#BBAACC",
      position: "relative",
      top: "30%",
      left: "4%",
      width: "300px !important",
    },
    accountIcon: {
      position: "absolute",
      right: "5%",
      top: "4% ",
      width: "35px !important",
      height: "35px !important",
      color: "#FFFFFF",
    },
    logoutIcon: {
      position: "absolute",
      right: "1%",
      width: " 35px !important",
      height: "35px !important",
      top: "4%",
      color: "#FFFFFF",
    },
  })
);
function Heading(Props: any) {
  
  // const currentPage = window.location.pathname;
  // const lastSegment = currentPage.split("/").pop();
  // console.log(lastSegment);
console.log('header');

  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Box className={classes.container}>
      <Box className={classes.topBox}>
        <Typography className={classes.propHeading}>{Props.heading}</Typography>
        <AccountBoxIcon className={classes.accountIcon} />
        <LogoutIcon className={classes.logoutIcon} />
      </Box>
    </Box>
  );
}

export default Heading;
