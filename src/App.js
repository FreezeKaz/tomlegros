import * as React from "react"
import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	HashRouter as Router,
	Routes,
	Route,
	
} from "react-router-dom";

import Home from './Pages/Home';


import Header from './Components/Header';
import Footer from "./Components/Footer";



class App extends React.Component {
	constructor(){
		super();
		this.state={
		
		}
	
	  };
	
	async componentDidMount(){
	
	
	}

	render = () => {

		return (
			<Router>
				<Header/>
					<Routes>
						<Route path="/" element={<Home/>} />
					</Routes>
				<Footer/>
			</Router>
		);
	}
}

export default App;
