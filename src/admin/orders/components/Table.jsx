import { Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DoneIcon from "@material-ui/icons/Done";
import React from "react";
import { DateFormat, DateUtils } from "../../../utils";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = (props) => {
  const { orders } = props;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Drinks
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Total Price
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Status
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Created At
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((order) => (
            <TableRow>
              <TableCell>{order.user.username}</TableCell>
              <TableCell align="center">{order.user.address}</TableCell>
              <TableCell align="left">
                {order.drink.map((item, index) => (
                  <React.Fragment>
                    <div style={{ fontWeight: 600 }}>
                      {index + 1}. {item.name}
                    </div>
                    <br />
                    <div>Price: {item.price}</div>
                    <br />
                    <div>Quantity: {item.quantity}</div>
                    <br />
                  </React.Fragment>
                ))}
              </TableCell>
              <TableCell align="center">{order.totalPrice}</TableCell>
              <TableCell align="center">
                <Chip
                  size="small"
                  label={order.status === "success" ? "Success" : "Pending"}
                  color={order.status === "success" ? "primary" : "secondary"}
                  icon={
                    order.status === "success" ? (
                      <DoneIcon />
                    ) : (
                      <AccessTimeIcon />
                    )
                  }
                />
              </TableCell>
              <TableCell align="center">
                {DateUtils.format(
                  order.createdAt,
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
