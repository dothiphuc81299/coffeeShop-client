import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { getListDrink } from '../../../redux/action/drink';
import { getQuery } from '../../../helpers/search';
import MenuItem from './MenuItem';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#5fa3b7",
    fontSize: 36,
    marginTop: theme.spacing(2)
  },
  noData: {
    textAlign: "center",
    fontSize: 20,
    width: "100%",
  },
  cols: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    margin: theme.spacing(2),
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#5fa3b7",
      color: "#fff",
    },
  },
}));

export default function HomePage(props) {
    const classes = useStyles();
    const { search } = useLocation();
    const dispatch = useDispatch();
    const { data, handleClickAddToCart, total } = props;
    const [page, setPage] = useState(1);
    //React.useState(0);
    const handleChange = (event, value) => {
      setPage(value);
    };

    useEffect(() => {
      const params = getQuery(search);
      dispatch(getListDrink({
        ...params,
        limit: 12,
        page,
      }));
    }, [search]);

    return (
      <div className="container">
        <Typography component="h6" variant="h6" className={classes.title}>
          MENU
        </Typography>
        <div className={classes.cols}>
        {
          !data.length 
          ? <Typography component="h6" variant="h6" className={classes.noData}>No data</Typography>
          : data.map((item,index) => <MenuItem  key = { index} item ={item} handleClickAddToCart ={handleClickAddToCart}/>)
        }
        </div>
        <div className={classes.pagination}>
          <Pagination
            size="large"
            count={6}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    );
}