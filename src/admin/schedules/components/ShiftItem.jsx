import { Button, Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch } from "react-redux";
import { DateFormat, DateUtils } from "../../../utils";
import avatar from "../../svg/avatar.jpg";
import { getShift } from "../actions";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 270,
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

const ShiftItem = (props) => {
  const { staff } = props;

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleReceive = () => {
    dispatch(getShift({_id: staff.id}));
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

        <Button
          variant="outlined"
          color="primary"
          style={{ marginTop: 8 }}
          onClick={handleReceive}
        >
          View Shift
        </Button>
      </CardContent>
    </Card>
  );
};
export default ShiftItem;
