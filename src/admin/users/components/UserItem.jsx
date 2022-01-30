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
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} >
              Username   
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} >
              Email   
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} >
              Phone    
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} >
              Address    
            </TableCell>
            <TableCell   style={{width: '1px', whiteSpace: 'nowrap',fontWeight: "bold"}}>
              Point
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} >
              Status
            </TableCell>
            {/* <TableCell style={{ fontWeight: "bold" }} >
              Created At
            </TableCell> */}
            <TableCell
              style={{ fontWeight: "bold" }}
              
            ></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell  style={{width: '1px', whiteSpace: 'nowrap'}}>{user.username}</TableCell>
              <TableCell  style={{width: '1px', whiteSpace: 'nowrap'}}>{user.email}</TableCell>
              <TableCell style={{width: '1px', whiteSpace: 'nowrap'}} >{user.phone}</TableCell>
              <TableCell style={{width: '300px'}}>{user.address} </TableCell>
              <TableCell >{user.currentPoint}</TableCell>
              <TableCell >
                <Chip
                  size="small"
                  label={user.active ? "active" : "deactive"}
                  color={user.active ? "primary" : "secondary"}
                />
              </TableCell>
              {/* <TableCell style={{width: '1px', whiteSpace: 'nowrap'}} align="right">
                {DateUtils.format(
                  user.createdAt,
                  DateFormat.YYYY_MM_DD_hh_mm_ss
                )}
              </TableCell> */}
              <TableCell >
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
