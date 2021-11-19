import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { DateFormat, DateUtils } from "../../../utils";
import RatingColumn from "./RatingColumn";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = (props) => {
  const { feedbacks } = props;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Address
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Feedback
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Rating
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Created At
            </TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.name}>
              <TableCell>{feedback.user.username}</TableCell>
              <TableCell align="center">{feedback.user.address}</TableCell>
              <TableCell align="center">{feedback.name}</TableCell>
              <TableCell align="center">
                <RatingColumn feedback={feedback} />
              </TableCell>
              <TableCell align="center">
                {DateUtils.format(
                  feedback.createdAt,
                  DateFormat.YYYY_MM_DD_hh_mm_ss
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
