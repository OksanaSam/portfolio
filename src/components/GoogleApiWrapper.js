import React, { Component } from 'react';
import '../App.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends Component {
    
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
          let shape = {
            type: 'circle',
        };
        let title = 'O';

        return (
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat:  43.648420, lng: -79.397880 }}
            >
            <Marker
                position={{ lat: 43.648420, lng: -79.397880 }}
                // icon={image}
                shape={shape}
                label={title}
                />
            </Map>
        );
      }

    }


export default GoogleApiWrapper({
apiKey: 'AIzaSyCDx68ZWeR3D1XUbziveTzQMzlL4iLxjVI'
})(MapContainer);