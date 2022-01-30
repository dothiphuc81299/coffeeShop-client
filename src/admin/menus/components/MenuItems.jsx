import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ObjectUtils } from "../../../utils/object.utils";
import { getList } from "../../categories/actions";
import { deleteDrink, updateDrink } from "../actions";
import MenuDelete from "./MenuDelete";
import MenuUpdate from "./MenuUpdate";
import { getInforByToken } from "../../../redux/action/inforStaff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  cover: {
    width: 125,
    height: 125,
  },
  media: {
    height: 125,
  },
  iconEdit: {
    position: "absolute",
    right: 40,
    marginTop: 36,
  },
  iconDelete: {
    position: "absolute",
    right: 0,
    marginTop: 36,
  },
}));
const MenuItems = (props) => {
  const { drink } = props;

  const [openUpdate, setOpenUpdate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const list = useSelector((state) => state.listAdmin.list);
  const token = useSelector((state) => state.authAdmin.token);
  const category = ObjectUtils.get(drink, "category", {});

  const classes = useStyles();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getInforByToken(token));
  // }, []);

  useEffect(() => {
    if (!list) {
      dispatch(getList());
    }
  }, []);

  const handleSubmitUpdate = (payload) => {
    dispatch(
      updateDrink({
        token,
        _id: payload._id,
        name: payload.name,
        price: payload.price,
        image: payload.image,
        category: payload.category,
      })
    );
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleSubmitDelete = (payload) => {
    dispatch(
      deleteDrink({
        token,
        _id: payload._id,
      })
    );
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

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <img src={drink.image} alt="image-drink" className={classes.cover} />
      </CardMedia>

      <div className={classes.media}>
        <CardContent>
          <Typography component="h6" variant="h6">
            {drink.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price: {drink.price}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Category: {category.name}
          </Typography>
        </CardContent>
      </div>

      <div className={classes.iconEdit} onClick={handleOpenUpdate}>
        <IconButton>
          <EditIcon style={{ color: green[500] }} fontSize="small" />
        </IconButton>
      </div>

      <MenuUpdate
        onSubmit={handleSubmitUpdate}
        list={list}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
        drink={drink}
      />

      <div className={classes.iconDelete} onClick={handleOpenDelete}>
        <IconButton>
          <DeleteIcon style={{ color: red[500] }} fontSize="small" />
        </IconButton>
      </div>

      <MenuDelete
        onSubmit={handleSubmitDelete}
        list={list}
        open={openDelete}
        onOpen={handleOpenDelete}
        onClose={handleCloseDelete}
        drink={drink}
      />
    </Card>
  );
};
export default MenuItems;
