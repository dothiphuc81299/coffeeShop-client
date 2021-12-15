import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useEffect } from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";

import CardActionsCate from "./CardActionsCate";
import CategoryDelete from "./CardDelete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { DateFormat, DateUtils } from "../../../utils";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const CategoryCard = (props) => {
  const { list, total } = props;
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Name
            </TableCell>

            <TableCell style={{ fontWeight: "bold" }} align="center">
              Created At
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold" }}
              align="center"
            ></TableCell>
            <TableCell
              style={{ fontWeight: "bold" }}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map((category) => (
            <TableRow>
              <TableCell> </TableCell>
              <TableCell align="center">{category.name}</TableCell>
              <TableCell align="center">
                {DateUtils.format(
                  category.createdAt,
                  DateFormat.YYYY_MM_DD_hh_mm_ss
                )}
              </TableCell>
              <TableCell align="center">
                <CardActionsCate category={category} />
              </TableCell>
              <TableCell align="center">
                <CategoryDelete category={category}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CategoryCard;
