import React from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar';
import movies from './movieDB';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        movies:movies,
        cartCount:0
    };
};


toggleCart = (movie) => {
    let {movies,cartCount} = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].inCart = !movies[movieId].inCart;

    if(movies[movieId].inCart){
        cartCount = cartCount+1;
    }else{
      cartCount = cartCount-1;
    }

    this.setState({movies,cartCount});
};

toggleFavorite = (movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].isFavourite = !movies[movieId].isFavourite;
    this.setState({movies});
};

addStars = (movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].starCount>=5){
        return
    }
    movies[movieId].starCount += 0.5;

    this.setState({
        movies
    })
};


removeStars = (movie) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].starCount<=0){
        return
    }
    movies[movieId].starCount -= 0.5;


    this.setState({
        movies
    })
};


  render() {
    const {movies,cartCount} = this.state;

    return (
      <>  
        <Navbar cartCount={cartCount}/>
        <MovieList  movies={movies} 
                    addStars={this.addStars} 
                    removeStars = {this.removeStars} 
                    toggleCart={this.toggleCart} 
                    toggleFavorite={this.toggleFavorite}/>
      </>
    );
  }
}



export default App;
