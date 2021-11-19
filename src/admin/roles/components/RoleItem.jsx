import { Chip, IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { ObjectUtils } from "../../../utils";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { updateRole } from "../actions";
import RoleUpdate from "./RoleUpdate";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 450,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: 74,
    height: 74,
  },
  iconButton: {
    position: "absolute",
    marginLeft: theme.spacing(27),
    marginTop: -32,
  },
  alert: {
    backgroundColor: ({ role }) => {
      const name = ObjectUtils.get(role, "name", "");
      if (name === "admin") {
        return "#f44336";
      }
      if (name === "service") {
        return "#ff9800";
      }
      if (name === "shipper") {
        return "#2196f3";
      }
      if (name === "bartender") {
        return "#4caf50";
      }
      return "#004d7f";
    },
    color: "white",
  },
}));

const RoleItem = (props) => {
  const { role, permissions } = props;

  const [openUpdate, setOpenUpdate] = useState(false);

  const classes = useStyles({ role });

  const dispatch = useDispatch();

  const handleSubmitUpdate = (payload) => {
    dispatch(updateRole(payload));
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <Card className={classes.root}>
      <Alert severity="none" className={classes.alert}>
        {role.name}

        <div className={classes.iconButton} onClick={handleOpenUpdate}>
          <IconButton>
            <EditIcon style={{ color: "white" }} fontSize="small" />
          </IconButton>
        </div>
      </Alert>

      <CardContent>
        <Typography variant="subtitle1">Permissions</Typography>

        {ObjectUtils.get(role, "permissions", []).map((permission) => (
          <React.Fragment>
            <Chip label={permission} style={{ marginBottom: 8 }} />
            <br />
          </React.Fragment>
        ))}
      </CardContent>

      <RoleUpdate
        onSubmit={handleSubmitUpdate}
        permissions={permissions}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
        role={role}
      />
    </Card>
  );
};
export default RoleItem;
