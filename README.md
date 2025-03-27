# Movie Flix
Movie Flix is a React-based web application that allows users to browse a collection of movies, add them to their favorites or cart, and rate them using a star-based system.

## Features
- **Movie List**: Displays a list of movies with details such as title, plot, price, rating, and poster.
- **Favorites**: Add or remove movies from the favorites list.
- **Cart**: Add or remove movies from the shopping cart.
- **Star Rating**: Rate movies using a star-based system (0 to 5 stars).
- **Dynamic Navbar**: Displays the cart count dynamically.

## Project Structure
```
movie-flix/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── movie-db.json
│   ├── Moviecard.js
│   ├── movieDB.js
│   ├── MovieList.js
│   ├── Navbar.js
│   ├── Navbar.module.css
│   └── NavbarModule.js
├── .gitignore
├── package.json
└── README.md
```

## Installation
1. Clone the repository:  
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:  
   ```sh
   cd movie-flix
   ```
3. Install dependencies:  
   ```sh
   npm install
   ```

## Usage
1. Start the development server:  
   ```sh
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Scripts
- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Ejects the app configuration.

## Components
### `App.js`
The main component that manages the state of the application, including the movie list and cart count. It also provides methods to toggle favorites, add/remove movies from the cart, and adjust star ratings.

### `MovieList.js`
Renders a list of movies using the `MovieCard` component.

### `MovieCard.js`
Displays individual movie details and provides buttons for adding/removing favorites, adding/removing from the cart, and adjusting star ratings.

### `Navbar.js`
A styled navigation bar that displays the app title and the cart count dynamically.

### `movieDB.js`
Contains the initial list of movies with their details.

## Styling
- **CSS Modules**: Used in `Navbar.module.css` for scoped styling of the `NavbarModule.js` component.
- **Styled Components**: Used in `Navbar.js` for dynamic styling.

## Dependencies
- React
- Styled Components
- React Scripts

## Future Enhancements
- Add a search bar to filter movies by title.
- Implement a detailed movie view page.
- Add user authentication for personalized features.

## License
This project is licensed under the MIT License.