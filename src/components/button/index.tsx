import { createStyles, makeStyles } from "@mui/styles";
import {Button, useTheme} from "@mui/material"


const useStyles = makeStyles((theme: any) =>
  createStyles({
    btn: ({ theme }: any) => ({
      marginTop: "22% !important",
      color: "#FFFFFF !important",
      background: "#BBAACC !important",
      border: "1px solid #BBAACC !important",
      borderRadius: "30px !important",
      width: "44%",
      marginLeft: "28%",
      height: "60px !important",
      [theme.breakpoints.between("sm", "md")]: {
        marginTop: "35% !important",
      },
    }),
  })
);

interface Props {
  icon?: string;
  text: string;
  onClick?: any;
  isDisabled?: any;
}

export default function MultimediaButton({
  icon,
  text,
  onClick,
  isDisabled,
}: Props) {
    const theme= useTheme();
  const classes = useStyles({theme});

  return (
    <>
      <Button
        disabled={isDisabled ? isDisabled : false}
        onClick={onClick}
        className={classes.btn}
        variant="outlined"
        color="primary"
        type="submit"
        startIcon={icon && <img src={icon} alt={"upload"} />}
      >
        {text}
      </Button>
    </>
  );
}
