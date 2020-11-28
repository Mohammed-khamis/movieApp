import React, { useRef, useEffect } from 'react';

const SearchForm = ({ setSearchTerm }) => {
	const searchValue = useRef('');

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const searchMovie = () => {
		setSearchTerm(searchValue.current.value);
	};
	return (
		<section className="section">
			<form className="form search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">search your favorite movie</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={searchMovie}
						ref={searchValue}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
