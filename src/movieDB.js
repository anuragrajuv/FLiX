


const movies= [
    {
      id: 1,
      title: "The Avengers",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      rating: "8.0",
      price: 99,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 2,
      title: "The Dark Knight",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      rating: "9.0",
      price: 199,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 3,
      title: "Iron Man",
      plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
      rating: "7.9",
      price: 139,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 4,
      title: "Inception",
      plot: "A thief with the ability to enter dreams and steal secrets is offered a chance at redemption when tasked with planting an idea into the mind of a wealthy businessman's son.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      rating: "8.8",
      price: 149,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 5,
      title: "The Matrix",
      plot: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      rating: "8.7",
      price: 129,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 6,
      title: "Pulp Fiction",
      plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      rating: "8.9",
      price: 159,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 7,
      title: "Interstellar",
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
      rating: "8.6",
      price: 169,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 8,
      title: "The Shawshank Redemption",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster:"https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: "9.3",
      price: 189,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 9,
      title: "Gladiator",
      plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      rating: "8.5",
      price: 119,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 10,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      plot: "A young hobbit, Frodo, is tasked with destroying a powerful ring to prevent it from falling into the hands of the evil Sauron.",
      poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      rating: "8.8",
      price: 179,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 11,
      title: "Fight Club",
      plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
      poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_SpVkWXBnRsBBNbDaV8dur-3jlOi6fepmxBrYGkzDwHj-xtDGP4jySn7xvonE9lqNpBdRWg",
      rating: "8.8",
      price: 149,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 12,
      title: "Forrest Gump",
      plot: "The presidencies of Kennedy and Johnson, the Vietnam War, and other events unfold through the perspective of an Alabama man with an IQ of 75.",
      poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      rating: "8.8",
      price: 139,
      starCount: 0,
      isFavourite: false,
      inCart: false
    },
    {
      id: 13,
      title: "Star Wars: Episode IV - A New Hope",
      plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
      poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBBTGgVQq5SADx7QduQTcJZnNO2I9qHUD0iTavGzrb5Piy9PyOig0xSBuHGhBsgIT8xNs_sw",
      rating: "8.6",
      price: 159,
      starCount: 0,
      isFavourite: false,
      inCart: false
    }
];

    
export default movies;