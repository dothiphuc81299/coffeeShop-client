import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { ObjectUtils } from "../../../utils";
import SimpleDialog from "../dialogs/SimpleDialog";

const PermissionDialog = (props) => {
  const { staff } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ marginTop: 8 }}
      >
        {staff.permissions === null || ObjectUtils.isEmpty(staff.permissions)
          ? "No Permission"
          : "Permissions"}
      </Button>

      {staff.permissions !== null && (
        <SimpleDialog open={open} onClose={handleClose} staff={staff} />
      )}
    </div>
  );
};
export default PermissionDialog;
