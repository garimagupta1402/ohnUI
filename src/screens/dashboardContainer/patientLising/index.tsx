import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { createStyles, makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Heading from "../heading";
import PatientTable from "../../../components/table/PatientTable";
import { useState } from "react";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    addNewBtn: {
      background: "#BBAACC",
      border: "1px solid #653177",
      boxsizing: "border-box",
      borderRadius: "5px",
      display: "flex",
      alignSelf: "end",
      marginRight: "50px",
      marginTop: "15px !important",
      width: "134px",
      height: "40px",
      color: "#FFFFFF",
    },
    applyBtn: {
      background: "#BBAACC",
      border: "1px solid #653177",
      boxsizing: "border-box",
      borderRadius: "5px",
      marginTop: "20px !important",
      width: "134px",
      height: "40px",
      color: "#FFFFFF",
      marginLeft: "1%",
    },
    resetBtn: {
      marginTop: "20px !important",
      width: "134px",
      height: "40px",
      color: "#BBAACC",
      border: "1px solid #653177",
      boxsizing: "border-box",
      borderRadius: "5px",
      background: "#FFFFFF",
      marginLeft: "2%",
    },
    searchField: {
      width: "870px",
      height: "40px",
      border: " 1px solid #D8D8D8",
      boxSizing: "border-box",
      borderRadius: "5px",
    },
    selectPicker: {
      border: " 1px solid #D8D8D8",
      boxSizing: "border-box",
      borderRadius: "5px",
      width: "200px",
    },
    secondBox: {
      width: "1620px",
      height: "250px",
      border: " 1px solid #D8D8D8",
      boxSizing: "border-box",
      borderRadius: "5px",
      marginTop: "15px",
      marginLeft: "15px",
    },
    thirdBox: {
      display: "flex",
      marginLeft: "1%",
      marginTop: "1%",
      marginRight: "1%",
      justifyContent: "space-between",
    },
    firstBox: {
      display: "flex",
      flexDirection: "column",
    },
    date: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: " 900",
      fontSize: "18px",
      lineHeight: "16px",
      letterSpacing: "0.304px",
      color: "#BBAACC",
      width: "100px",
      marginTop: "10px",
      marginBottom: "10px",
      marginLeft: "15px",
    },
    datePicker: {
      width: "100px !important",
      height: "15px !important",
    },
    fourthBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "37%",
      marginLeft: "1%",
    },
    exportBtn: {
      opacity: " 0.7",
      border: "1px solid #000000",
      boxSizing: "border-box",
      borderRadius: "7px",
      marginTop: "20px !important",
      width: "134px",
      height: "40px",
      color: "#BBAACC",
      background: "#FFFFFF",
      marginRight: "50px",
      display: "flex",
      alignSelf: "end",
    },
  })
);
function PatientListing() {
  const theme = useTheme();
  const classes = useStyles({ theme });


  const [value, setValue] = useState(null);
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Heading heading={"Patient Listing"} />
      <Box className={classes.firstBox}>
        <Button className={classes.addNewBtn}>Add New</Button>
        <Box className={classes.secondBox}>
          <Box className={classes.thirdBox}>
            <TextField label="Filter" />
            <TextField
              label="Search"
              variant="outlined"
              type="search"
              style={{ width: 1050 }}
            />
            <Select
              className={classes.selectPicker}
              label="10"
              onChange={handleChange}
              defaultValue={10}
            >
              <MenuItem>10</MenuItem>
              <MenuItem>25</MenuItem>
              <MenuItem>50</MenuItem>
              <MenuItem>100</MenuItem>
            </Select>
          </Box>
          <Typography className={classes.date}>Date</Typography>
          <Box className={classes.fourthBox}>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="End"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  className={classes.datePicker}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Button className={classes.applyBtn}>APPLY</Button>
          <Button className={classes.resetBtn}>RESET</Button>
        </Box>
        <Button className={classes.exportBtn}>Export</Button>
        <PatientTable />
      </Box>
    </>
  );
}
export default PatientListing;
