import { Typography, Box, Button, useTheme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import CustomField from "../../components/Inputs/Customfield";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: ({ theme }: any) => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      height: "965px",
      width: "100%",
    }),
    firstBox: ({ theme }: any) => ({
      width: "100%",
      marginTop: "150px",
      marginLeft: "20%",
      [theme.breakpoints.between("sm", "md")]: {
        marginTop: "200px",
      },
    }),
    secondBox: {
      width: "50%",
      display: "block",
      background: "#BBAACC",
      border: "1px solid #BBAACC",
      boxSizing: "border-box",
    },
    heading: {
      fontWeight: "normal !important ",
      fontSize: "32px !important",
      lineHeight: "37px",
      textAlign: "start",
      color: "#BBAACC",
    },
    details: ({ theme }: any) => ({
      marginTop: "7% !important",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px !important",
      lineHeight: "28px",
      textAlign: "left",
      color: "#BBAACC",
      width: "77%",
      [theme.breakpoints.between("sm", "md")]: {
        width: "81% !important",
      },
    }),
    btn: ({ theme }: any) => ({
      position: "absolute",
      left: "12% !important",
      marginTop: "17% !important",
      color: "#FFFFFF !important",
      background: "#BBAACC !important",
      border: "1px solid #BBAACC !important",
      borderRadius: "30px !important",
      width: "25%",
      height: "60px !important",
      [theme.breakpoints.between("sm", "md")]: {
        marginTop: "20% !important",
      },
    }),
    field2: ({ theme }: any) => ({
      marginTop: "5% !important",
      width: "60% !important",
      height: "60px!important",
      "& label.Mui-focused": {
        color: "#BBAACC",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "1px solid #BBAACC",
        },
        "&:hover fieldset": {
          border: "1px solid #BBAACC",
        },
        "&.Mui-focused fieldset": {
          border: "1px solid #BBAACC",
        },
      },
      borderRadius: "4px",
      [theme.breakpoints.between("sm", "md")]: {
        width: "80% !important",
      },
    }),
  })
);
function ResetPassword() {
  const theme= useTheme();
  const classes = useStyles({theme});
  return (
    <Box className={classes.container}>
      <Box className={classes.firstBox}>
        <Typography className={classes.heading}>Reset Password</Typography>
        <Typography className={classes.details}>
          Please make sure you at least have 8 characters
        </Typography>
        <CustomField
          type={"password"}
          name={"password"}
          placeholder={"********"}
          label={"Password"}
          style={classes.field2}
        />
        <Button type="submit" className={classes.btn}>
          Set new Password
        </Button>
      </Box>
    </Box>
  );
}

export default ResetPassword;
