import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, datas:[],  loading: true };
  componentDidMount(props) {
    fetch('http://localhost:2551/api/v1/stores/').then(response => response.json()).then(datas => this.setState({ datas : datas !== undefined ? datas : ""   }));
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
          { latitude: 47.359423, longitude: -122.021071 },
          { latitude: 47.2052192687988, longitude: -121.988426208496 },
          { latitude: 47.6307081, longitude: -122.1434325 },
          { latitude: 47.3084488, longitude: -122.2140121 },
          { latitude: 47.5524695, longitude: -122.0425407 }],
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
  displayMarkers = () => {
    return this.state.datas.map((data, index) => {
      return <Marker key={index} id={index} position={{
        lat: data.store_coordinates.lat,
        lng: data.store_coordinates.long
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }
  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;
    if (loading) {
      return null;
    }
    return (
      <Map google={google} initialCenter={userLocation} zoom={15}>
                {console.log(this.state.datas)}
                {console.log(this.state.stores)}
        <Marker onClick={() => console.log("You clicked me!")} />
        {this.displayMarkers()}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API
})(MapContainer);