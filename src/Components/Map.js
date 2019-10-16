import React from 'react';
import styled from 'styled-components';
import Marker from './Marker';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY, center, zoom, defaultOptions } from '../Constants/config'
import { connect } from "react-redux";
import ACTIONS from "../Modules/action";

const Map = (props) => {

    let handleClick = (e) => {
        let newMarker = {
            lat: e.lat,
            lng: e.lng
        };
        props.createMarker(newMarker);
    }

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={defaultOptions}
                onClick={handleClick}
                onChildClick={(i) => props.changeMarker(i)}
            >
                {
                    props.markers.map((marker, i) => {
                        return (
                            <Marker
                                key={i}
                                lat={marker.lat}
                                lng={marker.lng}
                                color={marker.color}
                                onRightClick={() => props.deleteMarker(i)}
                            />
                        )
                    })
                }
            </GoogleMapReact>
        </MapContainer>
    );
}

const MapContainer = styled.div`
width: 100%;
height: 100vh;
`

const mapStateToProps = state => ({
    markers: state.markers
});

const mapDispatchToProps = dispatch => ({
    createMarker: marker => dispatch(ACTIONS.createMarker(marker)),
    deleteMarker: id => dispatch(ACTIONS.deleteMarker(id)),
    changeMarker: id => dispatch(ACTIONS.changeMarker(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
