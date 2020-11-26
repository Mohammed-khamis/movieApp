import React from 'react';
import { Link } from 'react-router-dom';

const Favorite = () => {
	const favoriteList = JSON.parse(localStorage.getItem('favorite'));
	const remove = (movie) => {
		const findMovie = favoriteList.find((item) => item.id === movie.id);
		if (findMovie) {
			const index = favoriteList.indexOf(findMovie);
			favoriteList.splice(index, 1);
			localStorage.setItem('favorite', JSON.stringify(favoriteList));
		}
	};

	return (
		<section className="section movies-center">
			{JSON.parse(localStorage.getItem('favorite')).map((item) => (
				<article key={item.id} className="movie">
					<div className="image-container">
						<img
							src={`https://image.tmdb.org/t/p/w500${item.image}`}
							alt={item.title}
						/>
					</div>
					<div className="movie-footer">
						<h3>{item.title}</h3>
						<h4>Rating: {item.rating}</h4>
						<p>Date: {item.date}</p>
						<Link
							to={`/movie/${item.id}`}
							className="btn btn-primary btn-details"
						>
							details
						</Link>
						<button
							className="btn btn-primary btn-details"
							onClick={() => remove(item)}
						>
							Remove
						</button>
					</div>
				</article>
			))}
		</section>
	);
};

export default Favorite;
