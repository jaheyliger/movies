import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Error from './components/Error';
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Genres from './components/Genres';
import EditMovie from './components/EditMovie';
import ManageCatalogue from './components/ManageCatalogue';
import GraphQL from './components/GraphQL';
import Login from './components/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '/movies',
				element: <Movies />
			},
			{
				path: '/movies/:id',
				element: <Movie />
			},
			{
				path: '/admin/movie/0',
				element: <EditMovie />
			},
			{
				path: '/manage-catalogue',
				element: <ManageCatalogue />
			},
			{
				path: '/genres',
				element: <Genres />
			},
			{
				path: '/graphql',
				element: <GraphQL />
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	}
]);

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
