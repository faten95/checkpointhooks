import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieLink = ({ match,data }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(data.find((e) => e.id === +match.params.id));
  }, []);

  return (
    <div>
      <div>
        <h1 style={{color:"white"}}>{movie.title}</h1>
        <h3 style={{color:"white"}}>{movie.description}</h3>
        <iframe
        width="853"
        height="480"
        src={movie.url}
        title="movie"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      <Link to="/">
        <Button variant="info">Go Back</Button>
      </Link>
    </div>
  );
};

export default MovieLink;
