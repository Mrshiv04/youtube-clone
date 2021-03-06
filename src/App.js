import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/search/:searchTerm'>
						<Header />
						<div className='app_page'>
							<Sidebar />
							<SearchPage />
						</div>
					</Route>
					<Route path='/'>
						<Header />
						<div className='app_page'>
							<Sidebar />
							<RecommendedVideo />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
