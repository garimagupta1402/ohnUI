import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  useTheme,
} from "@mui/material";
import { Form, Formik } from "formik";
import { createStyles, makeStyles } from "@mui/styles";
import CustomField from "../../components/Inputs/Customfield";
import Schema from "../../schema";
import SignInButton from "../../components/button";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: ({ theme }: any) => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    }),
    firstBox: ({ theme }: any) => ({
      width: "100%",
      marginBottom: "50px",
      [theme.breakpoints.between("sm", "md")]: {
        marginTop: "20px",
      },
    }),
    heading: {
      fontWeight: "normal !important ",
      fontSize: "32px !important",
      lineHeight: "37px",
      textAlign: "center",
      color: "#BBAACC",
    },
    details: ({ theme }: any) => ({
      marginTop: "10% !important",
      marginLeft: "9% !important",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px !important",
      lineHeight: "28px",
      textAlign: "center",
      color: "#BBAACC",
      width: "50%",
      [theme.breakpoints.between("sm", "md")]: {
        width: "80%",
      },
    }),
    formField: {
      display: "flex",
      flexDirection: "column",
    },
    field: {
      marginTop: "5% !important",
      marginLeft: "20% !important",
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
    },
    forgot: ({ theme }: any) => ({
      color: "#BBAACC",
      textAlign: "end",
      bottom: "43%",
      position: "absolute",
      left: "33%",
      [theme.breakpoints.between("sm", "md")]: {
        bottom: "46%",
        left: "24%",
      },
    }),
    checkBox: ({ theme }: any) => ({
      position: "absolute",
      bottom: "35%",
      left: "10%",
      [theme.breakpoints.between("sm", "md")]: {
        bottom: "40%",
      },
    }),
  })
);

function Login() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Box className={classes.container}>
      <Box className={classes.firstBox}>
        <Typography className={classes.heading}>
          Sign In to the OAKWOOD Admin Panel
        </Typography>

        <Typography className={classes.details}>
          Enter the details below
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Schema.LoginValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
            touched,
            values,
          }) => (
            <Form className={classes.formField}>
              <CustomField
                type={"text"}
                name={"email"}
                placeholder={"user@appinventiv.com"}
                label={"Email Address"}
                style={classes.field}
                onBlur={handleBlur}
                values={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                // error={
                //   Boolean(touched.email && errors.email) || accountError !== ""
                // }
                isRequired={true}
              />

              <CustomField
                type={"password"}
                name={"password"}
                placeholder={"********"}
                label={"Password"}
                style={classes.field}
                values={values.password}
                onChange={handleChange}
                helperText={touched.password && errors.password}
                // error={
                //   Boolean(touched.password && errors.password) ||
                //   accountError !== ""
                // }
                isRequired={true}
                // endIcon={<VisibilityIcon/>}
              />
              <FormControlLabel
                // value={rememberMe}
                control={
                  <Checkbox
                    color="primary"
                    name="rememberMe"
                    // checked={rememberMe}
                    // onChange={() => {
                    //   dispatch({
                    //     type: Utils.ActionName.SIGN_IN,
                    //     payload: {
                    //       rememberMe: !rememberMe,
                    //     },
                    //   });
                    //   // }
                    // }}
                  />
                }
                label="Remember"
                className={classes.checkBox}
                sx={{ color: "#BBAACC" }}
              />

              <Typography className={classes.forgot}>
                Forgot Password?
              </Typography>
              <Box mt={2}>
                <SignInButton
                  isDisabled={isSubmitting}
                  text={isSubmitting ? "Signing in..." : "Sign in"}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;

{
  /* <div onClick={() => history.push("/forgotPassword")}>
                Forgot Password?
              </div>  */
}
