import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, loading }) => {
	if (loading) {
		return <h2 className="section-title">Loading...</h2>;
	}
	if (movies.length < 1) {
		return (
			<h2 className="section-title">no movies matced your search criteria</h2>
		);
	}
	return (
		<section className="section">
			<h2 className="section-title">Movies</h2>
			<div className="movies-center">
				{movies.map((movie) => {
					return <Movie key={movie.id} {...movie} />;
				})}
			</div>
		</section>
	);
};

export default MovieList;
