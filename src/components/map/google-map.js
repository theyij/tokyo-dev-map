import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY} from './apiKey.js';

// shop i
const HardCodePoints = ({shopName}) => (<div class='pin'>
    <p>{shopName}</p>
</div>);

class SimpleMap extends Component {
    //map center
    static defaultProps = {
        center: {
            lat: 35.663502,
            lng: 139.704171
        },
        zoom: 15
    };
    //locations
    constructor(props) {
        super(props);

        this.state = {
            cafe: [
                {
                    lat: 35.663502,
                    lng: 139.704171,
                    name: "Streamer Coffee Company",
                    // info: {
                    //   type: "Cafe",
                    //   distant: "10",
                    //   plug: "yes",
                    //   wifi: "yes",
                    //   price: "¥600~"
                    //   }
                }, {
                    lat: 35.659683,
                    lng: 139.701509,
                    name: "Cafe x Lounge MICROCOSMOS",
                    type: "Restaruant"
                }
            ]
        };
    }

    displayMarkers = () => {
        return this.state.cafe.map((cafe, index) => {
            return (
              <HardCodePoints
                lat={cafe.lat}
                lng={cafe.lng}
                key={index}
                shopName={cafe.name}
                id={"1"}/>);
             // onClick={() => console.log("You clicked me!")} />
        });
    };








    //Google map rendered
    render() {
        return (
        // Important! Always set the container height explicitly
        <div style={{
                height: '100%',
                width: '100%'
            }}>
            <GoogleMapReact bootstrapURLKeys={{
                    key: API_KEY
                }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                {this.displayMarkers()}
            </GoogleMapReact>
        </div>);
    }

}

export default SimpleMap;
