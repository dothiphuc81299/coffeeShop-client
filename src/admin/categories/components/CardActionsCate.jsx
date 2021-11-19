import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "../actions";
import CategoryUpdate from "../components/CategoryUpdate";

const CardActionsCate = (props) => {
  const { category } = props;

  const [openUpdate, setOpenUpdate] = useState(false);

  const dispatch = useDispatch();

  const handleSubmitUpdate = (payload) => {
    dispatch(updateList(payload));
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <React.Fragment>
      <Button size="small" color="primary" onClick={handleOpenUpdate}>
        Edit
      </Button>

      <CategoryUpdate
        onSubmit={handleSubmitUpdate}
        category={category}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
      />
    </React.Fragment>
  );
};

export default CardActionsCate;
