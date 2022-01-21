import { Box, Button, Typography, useTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Heading from "../heading";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    text: ({ theme }: any) => ({
      fontfamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: " 29px",
      color: "#000000",
      marginBottom: "1%",
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "21px",
        lineHeight: " 25px",
      },
    }),
    btn: ({ theme }: any) => ({
      background: " #FFFFFF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "3px",
      color: "#000000",
      width: "117px",
      height: "52px",
      marginBottom: "4%",
      [theme.breakpoints.between("sm", "md")]: {
        marginBottom: "2%",
      },
    }),
    total: ({ theme }: any) => ({
      fontSize: "21px",
      lineHeight: " 25px",
      color: "#000000",
      marginBottom: "1%",
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "18px",
        lineHeight: " 21px",
      },
    }),
    mainBox: {
      marginLeft: "2%",
      marginTop: "3%",
    },
  })
);
function Dashboard() {

  const theme = useTheme();
  const classes = useStyles({ theme });

  


  return (
    <Box>
      <Heading heading={"Dashboard"} />
      <Box className={classes.mainBox}>
        <Typography className={classes.text}>Patient</Typography>
        <Typography className={classes.total}> Total Patient</Typography>
        {/* <Button className={classes.btn}>{patients}</Button> */}
        <Typography className={classes.text}>App User</Typography>
        <Typography className={classes.total}> Total App User</Typography>
        {/* <Button className={classes.btn}>{app_user}</Button> */}
        <Typography className={classes.text}>Treatment Component</Typography>
        {/* <Button className={classes.btn}>{symptoms_count}</Button> */}
        <Typography className={classes.text}>Symptoms</Typography>
        {/* <Button className={classes.btn}>{treatmentcomponent_count}</Button> */}
      </Box>
    </Box>
  );
}

export default Dashboard;
