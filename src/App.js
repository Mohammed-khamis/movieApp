import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Favorite from './pages/Favorite';
import Error from './pages/Error';

//components
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/movie/:id" component={SingleMovie} />
				<Route exact path="/favorite" component={Favorite} />
				<Route path="*" component={Error} />
			</Switch>
		</Router>
	);
}

export default App;
