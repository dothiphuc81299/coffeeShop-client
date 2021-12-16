import { Divider, IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateFormat, DateUtils } from "../../../utils";
import avatar from "../../svg/avatar.jpg";
import { deleteUser } from "../actions";
import UserDelete from "./UserDelete";
import { getInforByToken } from "../../../redux/action/inforStaff";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DoneIcon from "@material-ui/icons/Done";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

const TableUser = (props) => {
  const { users } = props;
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Username   
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Phone    
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Address    
            </TableCell>
            <TableCell  align="center" style={{width: '1px', whiteSpace: 'nowrap',fontWeight: "bold"}}>
              CurrentPoint
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Status
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Created At
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold" }}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell  style={{width: '1px', whiteSpace: 'nowrap'}}>{user.username}</TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}} align="center">{user.phone}</TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}}align="center">{user.address} </TableCell>
              <TableCell align="center">{user.currentPoint}</TableCell>
              <TableCell align="center">
                <Chip
                  size="small"
                  label={user.active ? "active" : "deactive"}
                  color={user.active ? "primary" : "secondary"}
                />
              </TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}} align="right">
                {DateUtils.format(
                  user.createdAt,
                  DateFormat.YYYY_MM_DD_hh_mm_ss
                )}
              </TableCell>
              <TableCell align="center">
                <UserDelete user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUser;
