import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { green, red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateFormat, DateUtils } from "../../../utils";
import avatar from "../../svg/avatar.jpg";
import { deleteStaff, updateStaff } from "../actions";
import PermissionDialog from "../dialogs/PermissionDialog";
import EmployeeUpdate from "./EmployeeUpdate";
import EmployeeDelete from "./EmployeeDelete";
import { getInforByToken } from "../../../redux/action/inforStaff";
import {getListStaff} from "../../employees/actions/index";
const useStyles = makeStyles(() => ({
  root: {
    width: 320,
    height: 350,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: 74,
    height: 74,
  },
  iconEdit: {
    position: "absolute",
    right: 24,
    marginTop: 24,
  },
  iconDelete: {
    position: "absolute",
    right: -8,
    marginTop: 24,
  },
}));

const EmployeeItem = (props) => {
  const { staff, roles } = props;

  const [openUpdate, setOpenUpdate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);
const token =localStorage.getItem("tokenAdmin");
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

 
  const handleSubmitUpdate = (payload) => {
    dispatch(
      updateStaff({
        token,
        _id: payload._id,
        role: payload.role,
      })
    );
    setOpenUpdate(false);
    setTimeout(function() {
      window.location.reload();
      }, 1000);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleSubmitDelete = (payload) => {
    dispatch(
      deleteStaff({
        token,
        _id: payload._id,
      })
    );
    setOpenDelete(false);

    setTimeout(function() {
      window.location.reload();
      }, 1000);
  };

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={avatar} />}
        title={
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {staff.username}
          </Typography>
        }
        subheader={
          <div>{DateUtils.format(staff.createdAt, DateFormat.YYYY_MM_DD)}</div>
        }
        action={
          <React.Fragment>
            <div className={classes.iconEdit}>
              <IconButton onClick={handleOpenUpdate}>
                <EditIcon style={{ color: green[500] }} fontSize="small" />
              </IconButton>
            </div>

            <div className={classes.iconDelete} onClick={handleOpenDelete}>
              <IconButton>
                {staff.active ? (
                  <DeleteIcon style={{ color: red[500] }} fontSize="small" />
                ) : (
                  <DeleteIcon fontSize="small" />
                )}
              </IconButton>
            </div>
          </React.Fragment>
        }
      />

      <Divider />

      <CardContent>
        <Typography variant="subtitle2">Phone</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {staff.phone}
        </Typography>

        <Typography variant="subtitle2">Address</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {staff.address !== "" ? staff.address : "N/A"}
        </Typography>

        <Typography variant="subtitle2">Role</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {roles.map((role) => {
            if (role._id === staff.role) {
              return role.name;
            }
            if (staff.role === "000000000000000000000000") {
              return "N/A";
            }
            return null;
          })}
        </Typography>

        <PermissionDialog staff={staff} />
      </CardContent>

      <EmployeeUpdate
        staff={staff}
        roles={roles}
        onSubmit={handleSubmitUpdate}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
      />

      <EmployeeDelete
        onSubmit={handleSubmitDelete}
        open={openDelete}
        onOpen={handleOpenDelete}
        onClose={handleCloseDelete}
        staff={staff}
      />
    </Card>
  );
};
export default EmployeeItem;
