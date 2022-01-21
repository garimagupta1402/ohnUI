import { Typography, Box, Button, useTheme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import CustomField from "../../components/Inputs/Customfield";
import { Formik, Form } from "formik";
import Schema from "../../schema";

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
      marginTop: "10% !important",
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
      left: "10% !important",
      marginTop: "8% !important",
      color: "#FFFFFF !important",
      background: "#BBAACC !important",
      border: "1px solid #BBAACC !important",
      borderRadius: "30px !important",
      width: "25%",
      height: "60px !important",
      [theme.breakpoints.between("sm", "md")]: {
        marginTop: "20% !important",
        left: "13% !important",
      },
    }),
    field1: ({ theme }: any) => ({
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
const onSubmit = (values: any) => {
  console.log("values", values);
};
const initialValues = {
  email: "",
};
function ForgotPassword({ history }: any) {
  const theme= useTheme();
  const classes = useStyles({theme});
  return (
    <Box className={classes.container}>
      <Box className={classes.firstBox}>
          <Typography className={classes.heading}>
            Forgot your Password?
          </Typography>
            <Typography className={classes.details}>
              We'll help you reset it and get back to us.
            </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={Schema.LoginValidationSchema}
        >
           {() => (
          <Form>
            <CustomField
              type={"email"}
              name={"email"}
              placeholder={"user@appinventiv.com"}
              label={"Email Address"}
              style={classes.field1}
            />
            <Button type="submit" className={classes.btn}>
              Reset Password
            </Button>
          </Form>
           )}
        </Formik>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
