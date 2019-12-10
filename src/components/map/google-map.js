import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY} from './apiKey.js';

// shop i
const HardCodePoints = ({info}) => (<div class='marker'>
    <span class="pin"></span>
    <ul class="information">
      <h3>{info[0]}</h3>
      <li>Type : {info[1]}</li>
      <li>Distance : {info[2]}</li>
      <li>Free wifi : {info[3]}</li>
      <li>Plug : {info[4]}</li>
      <li>Price : ¥{info[5]}</li>
    </ul>
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
                    info: [
                      "Streamer Coffee Company",
                      "Cafe",
                      "8 mins",
                      "yes",
                      "yes",
                      "600~"
                    ]

                    // info: {
                    //   distant: "10",
                    //   plug: "yes",
                    //   wifi: "yes",
                    //   price: "¥600~"
                    //   }
                }, {
                    lat: 35.659683,
                    lng: 139.701509,
                    info: [
                      "Cafe x Lounge MICROCOSMOS",
                      "Restaurant",
                      "3 mins",
                      "yes",
                      "yes",
                      "900~"
                    ]
                    // type: "Restaruant"
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
                info={cafe.info}
                id={"1"}/>);
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
