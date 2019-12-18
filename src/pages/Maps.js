import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
      <div>
        <h2 style={{color:"#ffffff"}}>HELLO MAPS</h2> 
        <p style={{color:"#ffffff"}}>Nah disini maps, rencana ku nti ditaruh beberapa pilihan maps ada yg pasar terdekat, filter pasar, dsb. Kalo ada ide kasih tau aja ye</p>
        <div style={{ height: '50vh', width: '50%', paddingLeft:'50vh'}}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
      
    );
  }
}
 
export default Maps;