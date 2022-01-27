import {
  AppBar,
  Dialog,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import CategoryUpdateDialog from "../dialogs/CategoryUpdateDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#177245",
  },
}));

const CategoryUpdate = (props) => {
  const { open, category } = props;
  const { onSubmit, onClose } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      {open && (
        <Dialog open={open} fullScreen>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Update Category</Typography>
            </Toolbar>
          </AppBar>

          <CategoryUpdateDialog onSubmit={onSubmit} category={category} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default CategoryUpdate;
