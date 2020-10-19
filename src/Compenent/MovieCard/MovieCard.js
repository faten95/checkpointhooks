import React from 'react';
import {Card} from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';
import Rating from '../Rate';
import {Link} from 'react-router-dom';

const MovieCard = ({movies, setMovies, search, rate}) => {
    const cardsStyle = {
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
        justifyContent: "space-around",
      };
  
        return (
          <div style={cardsStyle}>
             
          {movies.filter(movie => movie.title.toUpperCase().includes(search.toUpperCase()) && (movie.rate>=rate) ).map(({ title, posterUrl, description, rate,id }, i) => (
            <Card style={{ width: "300px", margin: "10px"}} key={i}>
              <Card.Img variant="top" src={posterUrl} height="300px" />
              <Card.Body>
                <Card.Title><Link to={`MovieLink/${id}`} className="product-link">
              <h3>{title}</h3>
            </Link></Card.Title>
     
                <Card.Text>{description}</Card.Text> 
              </Card.Body>
              <Card.Footer>
              <Rating  rate={rate} testRating={false}/>
              </Card.Footer>
            </Card>
          ))}
          <div>
         <ModalMovie movies={movies} setMovies={setMovies}/>
          </div>
        </div>
        );
    }

export default MovieCard;
