import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
// import { Link } from 'react-router';

const useStyles = makeStyles((theme) => ({
  CardMedia: {
    margin: 'auto',
    width: 130,
    height: 130,
  },
  Card: {
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(90,90,90)',
    },
  },
}));

export default function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;

  return (
    <Grid item xs={12} sm={2} key={id}>
      {/* <Link to={'/pokemon/' + id}> */}
      <Card className={classes.Card}>
        <CardMedia className={classes.CardMedia} image={image}></CardMedia>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
      {/* </Link> */}
    </Grid>
  );
}
