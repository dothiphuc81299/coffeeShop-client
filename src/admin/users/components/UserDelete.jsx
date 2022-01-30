import { Dialog, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UserDeleteDialog from "../dialogs/UserDeleteDialog";
import { Divider, IconButton } from "@material-ui/core";
import { getInforByToken } from "../../../redux/action/inforStaff";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect,  useSelector } from "react-redux";
import { deleteUser } from "../actions";
import EditIcon from "@material-ui/icons/Edit";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#177245",
  },
  dialog: {
    minHeight: 300,
  },
}));

const UserDelete = (props) => {
  const { open, user } = props;
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const { onSubmit, onClose } = props;
  const token = useSelector((state) => state.authAdmin.token);
  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  const handleSubmitDelete = (payload) => {
    dispatch(deleteUser({
      token,
      _id : payload._id
    }));
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
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.iconDelete} onClick={handleOpenDelete}>
         <IconButton>
          
             <EditIcon style={{ color: green[500] }} fontSize="small" />
     
         </IconButton>
       </div>

     <UserDeleteDialog
       className={classes.dialog}
       user={user}
       onSubmit={handleSubmitDelete}
       open={openDelete}
       onOpen={handleOpenDelete}
       onClose={handleCloseDelete}
       
     />
 
</React.Fragment>
  );
};
export default UserDelete;
