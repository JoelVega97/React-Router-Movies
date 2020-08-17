import React from 'react';
import {Link, useRouteMatch, useHistory, Route} from 'react-router-dom'


const MovieList = props => {
  const {list} = props
  return (
    <div className="movie-list">
      {list.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}




function MovieDetails({ movie }) {  
  const { title, director, metascore } = movie;
  const {url} = useRouteMatch()

  const history = useHistory()

  const movieClick = () => {
    history.push('/movies')
  }

  return (
    <Link to = {`${url}/${movie.id}`} onClick = {movieClick}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>

      </div>
    </div>
  </Link>



  );
}

export default MovieList;
