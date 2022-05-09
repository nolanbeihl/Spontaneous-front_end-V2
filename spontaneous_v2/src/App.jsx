import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            businessResult : [],

        }
    }
    componentDidMount(){
        this.findbusiness()
    }
    findbusiness = async() =>{
        let response = await axios.get('https://api.yelp.com/v3/businesses/search?term=delis')
        this.setState({
            businessResult : response.data,
        })
        console.log(response)
    }
    render(){
        return(
            <><h1> This is the framework for Spontaneous Version 2!!</h1>
            <div className="container">
            <h1> Test of Yelp API call</h1>
            

            </div></>

        );
    }
}
export default App;
