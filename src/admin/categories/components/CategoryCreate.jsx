import {
  AppBar,
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import CategoryCreateDialog from "../dialogs/CategoryCreateDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
}));

const CategoryCreate = (props) => {
  const { open } = props;
  const { onSubmit, onOpen, onClose } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Button
          variant="contained"
          onClick={onOpen}
          style={{
            width: 400,
            marginBottom: 16,
            backgroundColor: "#5FA3B7",
            color: "white",
          }}
          open={open}
        >
          Add Category
        </Button>
      </Grid>

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
              <Typography variant="h6">Create Category</Typography>
            </Toolbar>
          </AppBar>

          <CategoryCreateDialog onSubmit={onSubmit} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default CategoryCreate;
