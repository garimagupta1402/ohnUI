import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
  TableContainer,
  Paper,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { ReducerModel } from "../../model";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: {
      marginLeft: "15px !important",
      marginTop: "15px !important",
      width: "1620px",
    },
    tableHead: {
      background: "#BBAACC",
      border: "1px solid #BBAACC",
      boxSizing: "border-box",
    },
    tableHeadCell: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontsize: "18px !important",
      lineHeight: "21px !important",
      textAlign: "center",
      letterSpacing: " 0.342px",
      color: "#FFFFFF !important",
    },
    tableCell: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      textAlign: "center",
      letterSpacing: "0.304px",
      color: "#BBAACC !important",
    },
  })
);
function PatientTable() {
  const theme = useTheme();
  const classes = useStyles({ theme });
 

  return (
    <div>
      <TableContainer className={classes.container} component={Paper}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Name
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Patient ID
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Mobile No.
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Email
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Patient EI
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Patient HS
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Date Submitted
              </TableCell>
              <TableCell className={classes.tableHeadCell} width={"3%"}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {patientList.map((item: any, index: any) => (
              <TableRow key={index}>
                <TableCell className={classes.tableCell}>
                  {item.firstName ? item.firstName : "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.patientId ? item.patientId : "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.phoneNo ? item.phoneNo : "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.email ? item.email : "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.EI ? item.EI: "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.HS ? item.HS : "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.submittedAt ? item.submittedAt : "-"}
                </TableCell>
                <TableCell className={classes.tableCell}>...</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
}

export default PatientTable;
