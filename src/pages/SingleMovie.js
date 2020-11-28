import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleMovie = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [movie, setMovie] = useState(null);
	const [favoriteList, setFavoriteList] = useState([]);

	const list = JSON.parse(localStorage.getItem('favorite')) || [];

	const addToFavorite = (movie) =>
	{
		const lookForMovie = list.find((item) => {
			return item.id === movie.id;
		});
		if (!lookForMovie) list.push(movie);
		localStorage.setItem('favorite', JSON.stringify(list));
		if (!lookForMovie) {
			setFavoriteList(list);
			alert('Added to favorite list');
		} else {
			alert('The movie is already in the favorite list');
		}
	};

	useEffect(() => {
		setLoading(true);
		const getMovie = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`,
				);
				const data = await response.json();
				if (data) {
					const {
						id,
						original_title: title,
						poster_path: image,
						overview,
						vote_average: rating,
						popularity,
						genres,
						runtime: duration,
						vote_count: numberOfRatings,
						spoken_languages: languages,
						release_date: date,
					} = data;
					const genre = genres.map((item) => {
						return item.name;
					});

					const language = languages.map((item) => {
						return item.name;
					});

					const newMovie = {
						id,
						title,
						image,
						overview,
						rating,
						popularity,
						genre,
						duration,
						numberOfRatings,
						language,
						date,
					};
					setMovie(newMovie);
				} else {
					setMovie(null);
				}
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};
		getMovie();
	}, [id]);

	if (loading) {
		return <h2 className="section-title">Loading...</h2>;
	}
	if (!movie) {
		return <h2 className="section-title">No Movie To Display</h2>;
	} else {
		const {
			id,
			title,
			image,
			overview,
			rating,
			popularity,
			genre,
			duration,
			numberOfRatings,
			language,
			date,
		} = movie;
		return (
			<section className="section movie-section">
				<h2 className="section-title">{title}</h2>
				<div className="film">
					<img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
					<div className="film-info">
						<p>title: {title}</p>
						<p>Date: {date}</p>
						<p>
							overview: <br />
							{overview}
						</p>
						<p>rating: {rating}</p>
						<p>Number Of People Rating: {numberOfRatings}</p>
						<p>duration: {duration} mins</p>
						<p>popularity: {popularity}</p>
						<p>
							Genre: &nbsp;
							{genre.map((item, index) => {
								return item ? <span key={index}>{item}</span> : null;
							})}
						</p>
						<p>
							Languages: &nbsp;
							{language.map((item, index) => {
								return item ? <span key={index}>{item}</span> : null;
							})}
						</p>
					</div>
				</div>
				<Link to="/" className="btn btn-primary">
					Back Home
				</Link>

				<button
					className="btn btn-primary"
					onClick={() => addToFavorite(movie)}
				>
					Add to favorite
				</button>
			</section>
		);
	}
};

export default SingleMovie;
