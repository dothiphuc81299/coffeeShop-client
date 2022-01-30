import { Dialog, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CategoryDeleteDialog from "../dialogs/CategoryDeleteDiagog";
import { deleteCategory } from "../actions";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect,  useSelector } from "react-redux";
import { Divider, IconButton } from "@material-ui/core";
import { getInforByToken } from "../../../redux/action/inforStaff";
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

const CategoryDelete = (props) => {
  const { open, category } = props;
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const { onSubmit, onClose } = props;
  const token = useSelector((state) => state.authAdmin.token);

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  const handleSubmitDelete = (payload) => {
    dispatch(deleteCategory({
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
               
                  <DeleteIcon style={{ color: red[500] }} fontSize="small"  />
          
              </IconButton>
            </div>
     
          <CategoryDeleteDialog
            className={classes.dialog}
            category ={category}
            onSubmit={handleSubmitDelete}
            open={openDelete}
            onOpen={handleOpenDelete}
            onClose={handleCloseDelete}
            
          />
      
    </React.Fragment>
  );
};
export default CategoryDelete;
