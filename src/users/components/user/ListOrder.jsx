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
import { Button } from "@material-ui/core";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const ListOrder = (props) => {
  const { data } = props;
  const classes = useStyles();
  const checkStatusLabel = (param) => {
    switch (param) {
      case "success":
        return "Success";
      case "cancel":
        return "Cancel";
      default:
        return "Pending";
    }
  };
  const checkStatusColor = (param) => {
    switch (param) {
      case "success":
        return "primary";
      case "cancel":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const checkStatusIcon = (param) => {
    switch (param) {
      case "success":
        return <DoneIcon />;
      case "cancel":
        return <CancelIcon />;
      default:
        return <AccessTimeIcon />;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{ fontWeight: "bold" }} align="center">
            #
            </TableCell>
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
          {data.map((order,index) => (
            <TableRow>
                <TableCell align="center"><Link to={`/user/history-order/${order._id}`}> {index+1} </Link></TableCell>
              <TableCell align="center">{order.user.address}</TableCell>
              <TableCell align="left">
                {order.drink.map((item, index) => (
                  <React.Fragment>
                    <div style={{ fontWeight: 600 }}>
                      {index + 1}. {item.name}
                    </div>
                    {/* <br />
                    <div>Price: {item.price.toLocaleString()}đ</div>
                    <br /> */}
                    <div>Quantity: {item.quantity}</div>
                    <br />
                  </React.Fragment>
                ))}
              </TableCell>
              <TableCell align="center">{order.totalPrice.toLocaleString()}đ</TableCell>
              <TableCell align="center">
              <Chip
                  size="small"
                  label={checkStatusLabel(order.status)}
                  color={checkStatusColor(order.status)}
                  icon={checkStatusIcon(order.status)}
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
  )
}

export default ListOrder;