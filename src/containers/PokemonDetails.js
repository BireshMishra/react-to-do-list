import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
    console.log(this.props);
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(match?.params);
    //const { id } = match?.params;

    // axios.get(POKEMON_API_URL + '/' + id).then((response) => {
    //   if (response.status >= 200 && response.status < 300) {
    //     this.setState({ pokemon: response.data });
    //   }
    // });
  }

  render() {
    return <div style={{ marginTop: 200 }}>Hi</div>;
  }
}

const PokemonDetailsWithRouter = useParams(PokemonDetails);

export default PokemonDetailsWithRouter;
