import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
	const [movie, setMovie] = useState({});
	let { id } = useParams();

	useEffect(() => {
		setMovie({
			id: 1,
			title: 'Avengers',
			release_date: '2012-04-08',
			runtime: 116,
			mpaa_rating: 'R',
			description: 'Spme long description'
		});
	}, [id]);

	return (
		<div>
			<h2>Movie: {movie.title}</h2>
			<small>
				<em>
					{movie.release_date}, {movie.runtime} minutes, Rated{' '}
					{movie.mpaa_rating}
				</em>
			</small>
			<hr />
			<p>{movie.description}</p>
		</div>
	);
};

export default Movie;
