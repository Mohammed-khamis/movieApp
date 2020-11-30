import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Favorite = () => {
	let [favoriteList, setFavoriteList] = useState([]);

	favoriteList = JSON.parse(localStorage.getItem('favorite')) || [];

	const remove = (movie) => {
		const Movie = favoriteList.filter((item) => item.id !== movie.id);

		if (Movie) {
			localStorage.setItem('favorite', JSON.stringify(Movie));
			setFavoriteList(JSON.parse(localStorage.getItem('favorite') || '[]'));
		}
	};

	return (
		<section className="section movies-center">
			{favoriteList.map((item) => (
				<article key={item.id} className="movie" title={item.title}>
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
						<div className="button">
							{/* <Link
								to={`/movie/${item.id}`}
								className="btn btn-primary btn-details"
							>
								details
							</Link> */}
							<button
								className="btn btn-primary btn-details "
								onClick={() => remove(item)}
							>
								Remove
							</button>
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default Favorite;
