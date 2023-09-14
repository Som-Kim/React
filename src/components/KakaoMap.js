import react, { Component } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"


class KakaoMap extends Component{
  render() {
    return (
      <div id="map-box">
        📍 지도보기
        <div id="map">
          <Map
            center={{ lat: this.props.lat, lng: this.props.lng }}
            style={{ width: "100%", height: "360px"}}
          ><MapMarker
              position={{ lat: this.props.lat, lng: this.props.lng }}
            ></MapMarker>
          </Map>
        </div>
      </div>
    )
  }
}

export default KakaoMap;
