import {
  Box,
  useTheme,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import LocalImages from "../../../utils/Images";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: ({ theme }: any) => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
    }),
    secondBox: {
      width: "100%",
      display: "block",
      background: "#BBAACC",
      border: "1px solid #BBAACC",
      boxSizing: "border-box",
      height: "1023px",
    },
    heading: {
      fontWeight: "normal !important ",
      fontSize: "32px !important",
      lineHeight: "37px",
      textAlign: "center",
      color: "#BBAACC",
    },
    details: {
      marginTop: "10% !important",
      marginLeft: "9% !important",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px !important",
      lineHeight: "28px",
      textAlign: "center",
      color: "#BBAACC",
      width: "50%",
    },
    formField: {
      display: "flex",
      flexDirection: "column",
    },

    circleLogo: ({ theme }: any) => ({
      position: "relative",

        top: "15%",
      left: "2%",

      [theme.breakpoints.between("sm", "md")]: {
        width: "70%",
        position: "relative",
        left: "15% ",
        top: "20% ",
      },
    }),
    recLogo: ({ theme }: any) => ({
      position:'relative',
    top: '270px',
    left:' 2%',

      [theme.breakpoints.between("sm", "md")]: {
        position: "absolute",
        top: "40%",
       left:'56%',
        width: "35%",
        padding: "10px",
      },
    }),

    field: ({ theme }: any) => ({
      display: "flex",
      margin: " 5% 20%",
      justifyContent: "space-between",
      [theme.breakpoints.between("sm", "md")]: {
        margin: " 5% 10%",
      },
    }),
  })
);
function RightContainer() {
    const theme= useTheme();
    const classes= useStyles({theme})
    return (
      <Box className={classes.container}>
        <Box className={classes.secondBox}>
          <img
            className={classes.circleLogo}
            src={LocalImages.CIRCLE_LOGO}
            alt="circle"
          />
          <Box>
            <img
              className={classes.recLogo}
              src={LocalImages.RECTANGLE_LOGO}
              alt="rec"
            />
          </Box>
        </Box>
      </Box>
    );
}

export default RightContainer
