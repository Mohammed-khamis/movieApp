import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ image, title, id, rating, date }) => {
	return (
		<article className="movie">
			<div className="image-container">
				<img src={image} alt={title} />
			</div>
			<div className="movie-footer">
				<h3>{title}</h3>
				<h4>Rating: {rating}</h4>
				<p>Date: {date}</p>
				<Link to={`/movie/${id}`} className="btn btn-primary btn-details">
					details
				</Link>
			</div>
		</article>
	);
};

export default Movie;
