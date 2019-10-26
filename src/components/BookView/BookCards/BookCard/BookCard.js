import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import axios from "../../../../utils/axios";
import classes from "./BookCard.module.css";

const BookCard = props => {
  const imgUrl = axios.defaults.baseURL + "/media/book/" + props.isbn;
  return (
    <Card className={classes.Card}>
      <CardActionArea onClick={props.click}>
        <CardMedia
          className={classes.Media}
          image={imgUrl}
          title={props.name}
        />
        <CardContent className={classes.CardContent}>
          <p className={classes.BookName}>{props.name}</p>
          <p className={classes.BookAuthor}>{props.author}</p>
        </CardContent>
      </CardActionArea>
        <Button className={classes.ActionBtn} size="small" color="primary">
          <AddShoppingCartOutlinedIcon />
        </Button>
    </Card>
  );
};

export default BookCard;
