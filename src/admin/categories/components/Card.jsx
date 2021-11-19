import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";
import CardActionsCate from "./CardActionsCate";

const useStyles = makeStyles({
  root: {
    width: 280
  },
  media: {
    height: 280
  },
  grid: {
    flexGrow: 1,
    margin: "auto",
    display: "block",
  },
});

const CategoryCard = (props) => {
  const { category } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={coffeeCup} />

              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {category.name}
                </Typography>
              </CardContent>

              <CardActionsCate category={category} />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default CategoryCard;
