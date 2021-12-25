import { Box, CircularProgress, Grid, Typography, Button } from "@mui/material";

import { withStyles } from "@mui/styles";
import axios from "axios";
import React, { Component } from "react";
import { POKEMON_API_URL } from "../config";
import { Favorite } from "@mui/icons-material";
import { connect } from 'react-redux'


const styles = (theme) => ({
  "@global": {
    body: {
      backgroundColor: 'rgb(68,68,68)'
    }
  },
  pokedexContainer: {
    height: "84vh",
    backgroundColor: "black",
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    padding: 30,
  },
  textTitle: {
    textTransform: "uppercase",
    fontFamily: "Fantasy",
  },
  pokemonImage: {
    width: "170px",
    height: "170px",
  },
  pokedexInfoContainer: {
    bottom: 60,
    position: "absolute",
    width: "100%",
  },
  separator: {
    height: "0.01mm",
    width: "95%",
  },
  favorite: {
    height: 50,
    width: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 30,
  },
});
class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    const id = window.location.pathname.toString().split("/")[2];
    axios.get(POKEMON_API_URL + "/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({ pokemon: response.data });
      }
    });
  }

  render() {
    const { pokemon } = this.state;
    const { classes } = this.props;
    if (pokemon) {
      const { name, sprites, height, weight, types } = pokemon;
      return (
        <Box className={classes.pokedexContainerBackground}>
          <Box className={classes.pokedexContainer}>
            <Typography className={classes.textTitle} variant="h1">
              {name}
            </Typography>
            <img src={sprites.front_default} className={classes.pokemonImage} />
            <Box className={classes.pokedexInfoContainer}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favorite}>
                    <Favorite style={{ color: "white", fontSize: 50 }} />
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Name:
                    <br />
                    {name}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Height:
                    <br />
                    {height}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Weight:
                    <br />
                    {weight}kg
                  </Typography>
                </Grid>
                {types.map((pokemonType) => {
                  const { name } = pokemonType.type;
                  return (
                    <Grid item md={2} key={name}>
                      <Typography className={classes.text}>
                        Type:
                        <br />
                        {name}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps= (dispatch) => ({
  
})


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PokemonDetails));
