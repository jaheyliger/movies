import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		fetch(`/movies`, { headers })
			.then((res) => res.json())
			.then((data) => setMovies(data))
			.catch((err) => console.error(err));
	}, []);

	// const { data, isPending } = useQuery({
	// 	queryKey: ['movies'],
	// 	queryFn: () =>
	// 		axios
	// 			.get('http://localhost:8080/movies', {
	// 				headers: { 'Content-Type': 'application/json' }
	// 			})
	// 			.then((res) => res.data)
	// });

	return (
		<div className=''>
			<h2>Movies</h2>
			<hr />
			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th>Movie</th>
						<th>Release Date</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>
					{false ? (
						<tr>
							<td></td>
							<td>Loading...</td>
							<td></td>
						</tr>
					) : (
						movies.map((item) => (
							<tr key={item.id}>
								<td>
									<Link to={`/movies/${item.id}`}>{item.title}</Link>
								</td>

								<td>{item.release_date}</td>
								<td>{item.mpaa_rating}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Movies;
