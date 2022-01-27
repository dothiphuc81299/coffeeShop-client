import { Dialog, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MenuDeleteDialog from "../dialogs/MenuDeleteDialog";
import { getInforByToken } from "../../../redux/action/inforStaff";
import { connect,  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { Divider, IconButton } from "@material-ui/core";
import { deleteDrink } from "../actions";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#177245",
  },
  dialog: {
    minHeight: 300,
  },
}));

const MenuDelete = (props) => {
  const { open, drink } = props;
  // const dispatch = useDispatch();
  // const [openDelete, setOpenDelete] = useState(false);
  const { onSubmit, onClose } = props;
  // const token = useSelector((state) => state.authAdmin.token);
  const classes = useStyles();
  // useEffect(() => {
  //   dispatch(getInforByToken(token));
  // }, [token]);

  // const handleSubmitDelete = (payload) => {
  //   dispatch(deleteDrink({
  //     token,
  //     _id : payload._id
  //   }));
  //   setOpenDelete(false);
  //   window.location.reload();
  // };

  

  // const handleOpenDelete = () => {
  //   setOpenDelete(!openDelete);
  // };

  // const handleCloseDelete = () => {
  //   setOpenDelete(false);
  // };
  
  return (
    <React.Fragment>
      {open && (
        <Dialog
          open={open}
          keepMounted
          onClose={onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
       
          <MenuDeleteDialog
          onSubmit={onSubmit} drink={drink} 
          />
       </Dialog>
      )}
    </React.Fragment>
  );
};
export default MenuDelete;
