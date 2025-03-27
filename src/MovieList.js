import {Component} from "react";
import MovieCard from "./Moviecard";

export default function MovieList(props) {
    const {movies,addStars,removeStars,toggleCart,toggleFavorite} = props;
    return (
        <>
            {movies.map((movie)=><MovieCard movies={movie} 
                                            addStars={addStars} 
                                            removeStars = {removeStars} 
                                            toggleCart={toggleCart} 
                                            toggleFavorite={toggleFavorite}
                                            key={movie.id}/>)}
        </>
    )
};

MovieCard.defaultProps = {
    poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1183_.jpg',
    title: "Movie Title",
    plot: 'Description',
    price: 0,
    rating: 0.0,
    starCount: 0,
    isFavourite: false,
    inCart: false
};


