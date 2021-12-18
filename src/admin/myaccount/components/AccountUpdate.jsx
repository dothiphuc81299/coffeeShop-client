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
  import AccountUpdateDialog from "../dialogs/AccountUpdateDialog";
  
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
      backgroundColor: "#5FA3B7",
    },
  }));
  
  export default function AccountUpdate(props)  {
    const { open, infor } = props;
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
                <Typography variant="h6">Update Info</Typography>
              </Toolbar>
            </AppBar>
  
            <AccountUpdateDialog onSubmit={onSubmit} infor={infor} />
          </Dialog>
        )}
      </React.Fragment>
    );
  };
