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
            GAPI: 'AIzaSyAORImFpOkztcGpu9e3iInNX_nB10Cn8AA',
            YAPI : '8Z7GDGxlSkr6QszFGN3-MP7-nKUy49NayN6fgRXt_0_kbeiaswOBI5ADUUUjxsc1y4sfwUBw178a3x0FiChWq-bhN8aMveN33MSTVbpGkSt6QIBeDrdPUWYi-Ay5YXYx',
            lat: +38.9072,
            lng: -77.0369,


        }
    }
    componentDidMount(){
        this.findbusiness();
        this.getLocation();
    }

    getLocation = async() =>{
        let response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.GAPI}`)
        // this.convertLocation();
        this.setState({
            lat: (response.data.location.lat),
            lng: (response.data.location.lng)
        })
        console.log(this.state.lat, this.state.lng)
    }
    findbusiness = async() =>{
        let response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=delis&latitude=${this.state.lat}&longitude=${this.state.lng}/` , {headers: {Authorization: 'Bearer ' + this.state.YAPI}});
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
            {/* <button onClick={this.getLocation()}>Get Location</button> */}
            {/* <this.findbusiness/> */}
            

            </div></>

        );
    }
}
export default App;
