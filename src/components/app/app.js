import React, { Component } from 'react';


import './app.css';
import RoutePointList from '../route-point-list';
import PointAddForm from '../route-point-add-form';
import RouteMap from '../route-map';

class App extends Component {
    render(){
        return (
            <div className="row route-map-app">
                <div className="col-5">
                    <PointAddForm/>
                    <RoutePointList/>
                </div>

                <div className="col-7">
                    <RouteMap/>
                </div>
            </div>
        )
    }
}


export default App;