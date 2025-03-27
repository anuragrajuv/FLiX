import React from 'react';

function MovieCard (props) {
        const {movies,addStars,removeStars,toggleCart,toggleFavorite} = props;
        const {title, plot, price, rating, starCount, poster ,isFavourite,inCart,id} = movies;
        return(
            <div className='main'>
                <div className='movie-card' key={id}>
                    <div className='left'>
                        <img alt='movie-poster' src={poster}/>
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs.{price}/-</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>

                                <img className="str-btn" 
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                alt='decrease' 
                                onClick={()=>{removeStars(movies)}}/>  

                                <img className="stars" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                alt='stars'/>

                                <img className="str-btn" 
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                                alt='increase' 
                                onClick={()=>{addStars(movies)}}/>  

                                <span className='star-count'>{starCount}</span>

                            </div>
                            {isFavourite 
                            ? <button className='unfavourite-btn' onClick={()=>{toggleFavorite(movies)}}>Remove from Favourites</button> 
                            : <button className='favourite-btn' onClick={()=>{toggleFavorite(movies)}}>Add to Favourites</button>
                            }
                            <button className={inCart?'uncart-btn':'cart-btn'} onClick={()=>{toggleCart(movies)}}>{inCart?"Remove From Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }

export default MovieCard;