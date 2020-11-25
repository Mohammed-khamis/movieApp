import React, { useState, useEffect } from 'react';
import MovieList from './../components/MovieList';
import SearchForm from './../components/SearchForm';

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setLoading(true);
		const getMovies = async () => {
			try {
				if (searchTerm) {
					const response = await fetch(
						`https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&query=${searchTerm}`,
					);
					const data = await response.json();
					const { results } = data;
					if (results) {
						const newMovies = results.map((movie) => {
							const {
								id,
								original_title,
								overview,
								popularity,
								vote_average,
								poster_path,
							} = movie;
							return {
								id,
								title: original_title,
								image: `https://image.tmdb.org/t/p/w500${poster_path}`,
								overview,
								popularity,
								rating: vote_average,
							};
						});
						setMovies(newMovies);
					} else {
						setMovies([]);
					}
				} else {
					const response = await fetch(
						`https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`,
					);
					const data = await response.json();
					const { results } = data;
					if (results) {
						const newMovies = results.map((movie) => {
							const {
								id,
								original_title,
								overview,
								popularity,
								vote_average,
								poster_path,
							} = movie;
							return {
								id,
								title: original_title,
								image: `https://image.tmdb.org/t/p/w500${poster_path}`,
								overview,
								popularity,
								rating: vote_average,
							};
						});
						setMovies(newMovies);
					} else {
						setMovies([]);
					}
				}
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};
		getMovies();
	}, [searchTerm]);

	return (
		<main>
			<SearchForm setSearchTerm={setSearchTerm} />
			<MovieList loading={loading} movies={movies} />
		</main>
	);
};

export default Home;
