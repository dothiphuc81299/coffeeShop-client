import { Divider, IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DateFormat, DateUtils } from "../../../utils";
import avatar from "../../svg/avatar.jpg";
import { deleteUser } from "../actions";
import UserDelete from "./UserDelete";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: 74,
    height: 74,
  },
}));

const UserItem = (props) => {
  const { user } = props;

  const [openDelete, setOpenDelete] = useState(false);

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmitDelete = (payload) => {
    dispatch(deleteUser(payload));
    setOpenDelete(false);
    window.location.reload();
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
            {user.username}
          </Typography>
        }
        subheader={
          <div>{DateUtils.format(user.createdAt, DateFormat.YYYY_MM_DD)}</div>
        }
        action={
          <div onClick={handleOpenDelete}>
            <IconButton>
              {user.active ? (
                <DeleteIcon style={{ color: red[500] }} fontSize="small" />
              ) : (
                <DeleteIcon fontSize="small" />
              )}
            </IconButton>
          </div>
        }
      />

      <Divider />

      <CardContent>
        <Typography variant="subtitle2">Phone</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.phone}
        </Typography>
        <Typography variant="subtitle2">Address</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.address}
        </Typography>
      </CardContent>

      <UserDelete
        onSubmit={handleSubmitDelete}
        open={openDelete}
        onOpen={handleOpenDelete}
        onClose={handleCloseDelete}
        user={user}
      />
    </Card>
  );
};
export default UserItem;
