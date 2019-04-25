import React, { Component } from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { updateCenter } from '../../actions';
import './route-map.css'

class RouteMap extends Component {

    map = null;
    ymaps = null;
    route = null;
    displayRoute =(routeItems) =>{
        const items = routeItems.reduce(( prev, current) => {
                const { type, point } = current;
                return prev.push({type, point})  && prev ;}
            ,[]);

        if (this.ymaps && this.map) {
            this.map.geoObjects.remove(this.route);
            this.ymaps
                .route(items)
                .then(route => {
                    this.route = route;
                    this.map.geoObjects.add(route);
                });
        }
    };
    render() {
        const {routeItems, center, updateCenter } = this.props;
        this.displayRoute(routeItems);

        return (
            <div className="route-map">
                <YMaps>
                    <Map state={{ center, zoom: 15 }}
                         instanceRef={ref => this.map = ref}
                         height = '65vh '
                         width = "100%"
                         onBoundsChange={() => updateCenter(this.map.getCenter())}
                         onLoad  = {ymaps => this.ymaps = ymaps}
                         modules={['templateLayoutFactory' , 'route']}
                    >
                        {routeItems.map(item =>
                            (<Placemark geometry={item.point}
                                        properties = {{balloonContent: item.label}}
                                        options = {{
                                            preset: 'islands#icon',
                                            iconColor: 'rgb(0, 149, 182)',
                                            draggable: true
                                        }}
                                        key = {item.id}
                            />))
                        }

                    </Map>
                </YMaps>
            </div>
        )
    }
};

const mapStateToProps =({ routeItems, center }) =>{
    return { routeItems, center };
};

const mapDispatchToProps = {
    updateCenter
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteMap);