import * as React from "react"
import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	HashRouter, Route, Link
	
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
			<HashRouter>
				<Header/>

						<Route exact path="/" element={<Home/>} />
				<Footer/>
			</HashRouter>
		);
	}
}

export default App;
