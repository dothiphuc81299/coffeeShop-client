import { Button } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateList } from "../actions";
import CategoryUpdate from "../components/CategoryUpdate";
import { useHistory } from "react-router";
import { getInforByToken } from "../../../redux/action/inforStaff";

const CardActionsCate = (props) => {
  const { category } = props;

  const [openUpdate, setOpenUpdate] = useState(false);
  const token = useSelector((state) => state.authAdmin.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);
  const handleSubmitUpdate = (payload) => {
    dispatch(updateList({
      token,
      _id : payload._id,
      name:payload.name,

    }));
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
