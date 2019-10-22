import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../../../assets/SomethingGained.jpg';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    display: 'inline-block',
    margin: '1rem',
    position: 'relative',
  },
  media: {
    height: 140,
  },
  actions: {
      float: 'right'
  }
});

const BookCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          <AddShoppingCartOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}


export default BookCard;