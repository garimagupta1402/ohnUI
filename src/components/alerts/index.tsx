import {useState, useEffect, useRef} from 'react';
import {makeStyles, createStyles} from '@mui/styles';
import CloseIcon from "@mui/icons-material/Close";
import utils from '../../utils'

const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 10px",
    },
    leftContainer: {
      display: "flex",
      alignItems: "center",
    },
    rightContainer: {
      display: "flex",
      alignItems: "center",
    },
    message: {
      marginLeft: "5px",
      textAlign: "left",
      font: "normal normal normal 14px/20px Roboto",
      letterSpacing: "0.1px",
      color: "#FFFFFF",
      opacity: 1,
    },
    remainingTime: {
      marginRight: "5px",
    },
  })
);
interface Props{
    icon?: any;
    message?: string;
    style?: any;
    close:Function;
}
function Alert ({icon, message, style, close }: Props){
const classes = useStyles();

  const [seconds, setSeconds] = useState(
    utils.constants.showAlertSeconds
  );
  const ref = useRef<any>(null);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
      close();
      if (ref) {
        ref.current.click();
      }
    }
  }, [seconds, close]);

  return (
    <div className={classes.container} style={style} ref={ref}>
      <div className={classes.leftContainer}>
        {icon} <span className={classes.message}>{message}</span>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.remainingTime}>{seconds}s</div>
        <CloseIcon />
      </div>
    </div>
  );
}
export default Alert;