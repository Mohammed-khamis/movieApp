import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ image, title, id, rating, date }) => {
	return (
		<article className="movie" title={title}>
			<Link to={`/movie/${id}`}>
				<div className="image-container">
					<img src={image} alt={title} />
				</div>
				<div className="movie-footer">
					<h3>{title}</h3>
					<h4>Rating: {rating}</h4>
					<p>Date: {date}</p>
				</div>
			</Link>
		</article>
	);
};

export default Movie;
