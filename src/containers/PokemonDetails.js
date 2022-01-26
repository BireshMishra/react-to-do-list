import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { POKEMON_API_URL } from '../config';
import {
  CircularProgress,
  Box,
  withStyles,
  Typography,
} from '@material-ui/core';

const styles = (theme) => ({
  pokedexContainer: {
    height: '80vh',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 75,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 30,
  },
  textTitle: {
    textTransform: 'uppercase',
    fontFamily: 'fantasy',
  },
  pokemonImage: {
    width: '170px',
    height: '170px',
  },
});

function PokemonDetails(props) {
  const { classes } = props;
  let { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  console.log(id);

  useEffect(() => {
    axios.get(POKEMON_API_URL + '/' + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        setPokemon(response.data);
      }
    });
  }, []);

  if (pokemon) {
    const { name, sprites } = pokemon;
    return (
      <Box>
        <Box className={classes.pokedexContainer}>
          <Typography className={classes.textTitle} variant="h1">
            {name}
          </Typography>
          <img className={classes.pokemonImage} src={sprites.front_default} />
        </Box>
      </Box>
    );
  } else {
    return <CircularProgress />;
  }
}

export default withStyles(styles)(PokemonDetails);

// class PokemonDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemon: null,
//     };
//     console.log(this.props);
//   }

//   componentDidMount() {
//     const { match } = this.props;
//     console.log(match?.params);
//     //const { id } = match?.params;

//     // axios.get(POKEMON_API_URL + '/' + id).then((response) => {
//     //   if (response.status >= 200 && response.status < 300) {
//     //     this.setState({ pokemon: response.data });
//     //   }
//     // });
//   }

//   render() {
//     return <div style={{ marginTop: 200 }}>Hi</div>;
//   }
// }

// const PokemonDetailsWithRouter = useParams(PokemonDetails);

// export default PokemonDetailsWithRouter;
