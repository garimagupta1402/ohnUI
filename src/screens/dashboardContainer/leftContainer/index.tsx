import { Box, Typography, useTheme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    heading: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "30px !important",
      lineHeight: "35px",
      color: "#FFFFFF",
      marginTop: "33px !important",
      marginLeft: "16px !important",
    },
    container: {
      display: "flex",
      width:'183px'
    },
    text: {
      fontStyle: "normal",
      fontSize: "18px !important",
      lineHeight: "21px",
      color: "#FFFFFF",
      opacity: "0.9",
      textAlign: "left",
      marginTop: "50px !important",
      marginLeft:'20px',
      width:'150px'
    },
    leftBox: {
      background: "#BBAACC",
      height: "1065px",
      width: "100%",
    },
  })
);
function LeftContainer(Props: any) {
  // const currentPage = window.location.pathname;
  // const lastSegment = currentPage.split("/").pop();
  // console.log('sidePAnel');

  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Box className={classes.container}>
      <Box className={classes.leftBox}>
        <Typography className={classes.heading}>OAKWOOD</Typography>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Typography className={classes.text}>Dashboard</Typography>
        </Link>
        <Link to="/treatment" style={{ textDecoration: "none" }}>
          <Typography className={classes.text}>Treatment Component</Typography>
        </Link>
        <Link to="/patientListing" style={{ textDecoration: "none" }}>
          <Typography className={classes.text}>Patient Listing</Typography>
        </Link>
        <Link to="/appUserListing" style={{ textDecoration: "none" }}>
          <Typography className={classes.text}>App User Listing</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default LeftContainer;
