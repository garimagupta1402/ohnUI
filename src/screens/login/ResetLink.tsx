import { Typography, useTheme, Box, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Formik , Form} from "formik";
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
      left: "12% !important",
      marginTop: "8% !important",
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
  })
);
const onSubmit = (values: any) => {
  console.log("values", values);
};
const initialValues = {
  email: "",
};
function ResetLink() {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <Box className={classes.container}>
      <Box className={classes.firstBox}>
        <Typography className={classes.heading}>Reset Link</Typography>

        <Typography className={classes.details}>
          An email has been sent to your registered email ID. Please follow the
          instructions to reset your password
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={Schema.LoginValidationSchema}
        >
          {() => (
            <Form>
              <Button type="submit" className={classes.btn}>
                Back to Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default ResetLink;
