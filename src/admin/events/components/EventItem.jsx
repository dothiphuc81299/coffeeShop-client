import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateFormat, DateUtils } from "../../../utils";
import EventUpdate from "./EventUpdate";
import EventDelete from "./EventDelete";
import { changeStatusEvent, deleteEvent, updateEvent } from "../actions";
import DeleteIcon from "@material-ui/icons/Delete";
import { getInforByToken } from "../../../redux/action/inforStaff";
import { getEvents } from "../actions";
import EventChangeStatus from "./EventChangeStatus";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  actions: {
    position: "absolute",
    right: 0,
    marginTop: 48,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
  content: {
    flex: "1 0 auto",
  },
  iconEdit: {
    position: "absolute",
    right: 40,
    marginTop: 36,
  },
  iconDelete: {
    position: "absolute",
    right: 0,
    marginTop: 36,
  },
  iconActive: {
    position: "absolute",
    right: 80,
    marginTop: 36,
  },
}));

const EventItem = (props) => {
  const { event } = props;

  const [openUpdate, setOpenUpdate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);
  const [openChangeStatus,setOpenChangeStatus] =useState(false);
  const token = useSelector((state) => state.authAdmin.token);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);
  const handleSubmitUpdate = (payload) => {
    dispatch(
      updateEvent({
        token,
        _id: payload._id,
        name: payload.name,
        desc: payload.desc,
      })
    );
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleSubmitDelete = (payload) => {
    dispatch(
      deleteEvent({
        token,
        _id: payload._id,
      })
    );
    setOpenDelete(false);

    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleSubmitChangeStatus = (payload) => {
    dispatch(
      changeStatusEvent({
        token,
        _id: payload._id,
      })
    );

    console.log(token)
    setOpenChangeStatus(false);

    setTimeout(function () {
      window.location.reload();
    }, 10000);
  };

  const handleOpenChangeStatus = () => {
    setOpenChangeStatus(!openChangeStatus);
  };

  const handleCloseChangeStatus = () => {
    setOpenChangeStatus(false);
  };



  return (
    <Card className={classes.root}>
      <CardMedia>
        <img
          src="https://image.flaticon.com/icons/png/512/2558/2558944.png"
          className={classes.icon}
        />
      </CardMedia>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {event.name}
          </Typography>

          <Chip
            icon={<AccessAlarmIcon />}
            label={DateUtils.format(
              event.createdAt,
              DateFormat.YYYY_MM_DD_hh_mm_ss
            )}
            color="secondary"
            className={classes.chip}
          />
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            {event.desc}
          </Typography>
        </CardContent>
      </div>

      <div className={classes.iconActive} onClick={handleOpenChangeStatus}>
      {event.active ? (
          <Chip color="primary" label="ACTIVE" />
        ) : (
          <Chip color="secondary" label="INACTIVE" />
        )}
      
      </div>

      <div className={classes.iconEdit} onClick={handleOpenUpdate}>
        {/* {event.active ? (
          <Chip color="primary" label="ACTIVE" />
        ) : (
          <Chip color="secondary" label="INACTIVE" />
        )} */}
        <IconButton>
          <EditIcon style={{ color: green[500] }} fontSize="small" />
        </IconButton>
      </div>

      <EventChangeStatus
        onSubmit={handleSubmitChangeStatus}
        open={openChangeStatus}
        onOpen={handleOpenChangeStatus}
        onClose={handleCloseChangeStatus}
        event={event}
      />

      <EventUpdate
        onSubmit={handleSubmitUpdate}
        event={event}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
      />

      <div className={classes.iconDelete} onClick={handleOpenDelete}>
        {/* <IconButton>
          {event.active ? (
            <DeleteIcon style={{ color: red[500] }} fontSize="small" />
          ) : (
            <DeleteIcon style={{ color: red[500] }} fontSize="small" />
          )}
        </IconButton> */}

        <IconButton>
          <DeleteIcon style={{ color: red[500] }} fontSize="small" />
        </IconButton>
      </div>

      <EventDelete
        onSubmit={handleSubmitDelete}
        open={openDelete}
        onOpen={handleOpenDelete}
        onClose={handleCloseDelete}
        event={event}
      />
    </Card>
  );
};

export default EventItem;
