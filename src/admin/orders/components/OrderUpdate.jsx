import { Dialog, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { connect, useSelector } from "react-redux";
import { Divider, IconButton } from "@material-ui/core";
import { getInforByToken } from "../../../redux/action/inforStaff";
import { updateOrder } from "../actions";
import { getOrders } from "../actions";
import { green, red } from "@material-ui/core/colors";
import OrderUpdateDialog from "../dialogs/OrderUpdateDialog";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
  dialog: {
    minHeight: 300,
  },
}));

const OrderUpdate = (props) => {
  const { open, order } = props;
  const dispatch = useDispatch();
  const [openUpdate, setOpenUpdate] = useState(false);
  const { onSubmit, onClose } = props;
  const token = useSelector((state) => state.authAdmin.token);

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  const handleSubmitUpdate = (payload) => {
    dispatch(
        updateOrder({
        token,
        _id: payload._id,
        status: payload.status,
      })
    );
    setOpenUpdate(false);
     //window.location.reload();
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseDelete = () => {
    setOpenUpdate(false);
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.iconUpdate} onClick={handleOpenUpdate}>
        <IconButton>
          <EditIcon style={{ color: red[500] }} fontSize="small" />
        </IconButton>
      </div>

      <OrderUpdateDialog
        className={classes.dialog}
        order ={order}
        onSubmit={handleSubmitUpdate}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseDelete}
      />
    </React.Fragment>
  );
};
export default OrderUpdate;
