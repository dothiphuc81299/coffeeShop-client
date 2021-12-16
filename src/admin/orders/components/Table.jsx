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
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = (props) => {
  const { orders } = props;

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
          <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Drinks
            </TableCell>
            <TableCell style={{width: '1px', whiteSpace: 'nowrap',fontWeight: "bold"}}>
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
          {orders.map((order,index) => (
            <TableRow >
               <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}>{index + 1}</TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}>{order.user.username}</TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}>{order.user.address}</TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}>
                {order.drink.map((item) => (
                  <React.Fragment>
                    <div >
                      {item.name}
                    </div>
                    <br />
                    {/* <div>Price: {item.price}</div>
                    <br />
                    <div>Quantity: {item.quantity}</div>
                    <br /> */}
                  </React.Fragment>
                ))}
              </TableCell>
              <TableCell align="center">{order.totalPrice}</TableCell>
              <TableCell align="center">
                <Chip
                  size="small"
                  label={checkStatusLabel(order.status)}
                  color={checkStatusColor(order.status)}
                  icon={checkStatusIcon(order.status)}
                />
              </TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}} >
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
