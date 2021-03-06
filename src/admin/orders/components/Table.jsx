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
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import OrderUpdate from "./OrderUpdate";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = (props) => {
  const { orders, page } = props;

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

  const checkPage = (index, page) => {
    switch (page) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return index + 1 + (page - 1) * 12;
      default:
        return index + 1;
    }
  };

  return (
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell style={{ fontWeight: "bold" }}>#</TableCell> */}
            <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Drinks
            </TableCell>
            <TableCell style={{ fontWeight: "bold", whiteSpace: "nowrap" }} align="center">
              UsePoint
            </TableCell>
            <TableCell
              style={{ width: "1px", whiteSpace: "nowrap", fontWeight: "bold" }}
            >
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
          {orders.map((order, index) => (
            <TableRow>
              {/* <TableCell
                key={order._id}
                style={{ width: "1px", whiteSpace: "nowrap" }}
              >
                <Link to={`/admin/orders/${order._id}`}>
                  {checkPage(index, page)}{" "}
                </Link>{" "}
              </TableCell> */}
              <TableCell style={{ width: "1px", whiteSpace: "nowrap" }}>
              <Link to={`/admin/orders/${order._id}`}>  {order.user.username}</Link> 
              </TableCell>
              <TableCell style={{ width: "500px" }}>
                {order.user.address}
              </TableCell>
              <TableCell style={{ width: "1px", whiteSpace: "nowrap" }}>
                {order.drink.map((item) => (
                  <React.Fragment>
                    <div> {item.quantity} {item.name}</div>
                    <br />
                    {/* <div>Price: {item.price}</div>
                    <br />
                    <div>Quantity: {item.quantity}</div>
                    <br /> */}
                  </React.Fragment>
                ))}
              </TableCell>
              {order.is_point ? <TableCell align="center">{order.point}</TableCell> :   <TableCell align="center">0</TableCell> }

              <TableCell align="center">{order.totalPrice}</TableCell>
              <TableCell align="center">
                <Chip
                  size="small"
                  label={checkStatusLabel(order.status)}
                  color={checkStatusColor(order.status)}
                  icon={checkStatusIcon(order.status)}
                />
              </TableCell>
              <TableCell style={{ width: "1px", whiteSpace: "nowrap" }}>
                {DateUtils.format(
                  order.createdAt,
                  DateFormat.YYYY_MM_DD
                )}
              </TableCell>

              <TableCell style={{ width: "1px", whiteSpace: "nowrap" }}>
                <OrderUpdate order={order} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
