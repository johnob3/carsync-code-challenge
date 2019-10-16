import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import ACTIONS from "../Modules/action";
import { latRegExp, lngRegExp } from '../Constants/config';
import { Typography } from '@material-ui/core';

const Sidebar = (props) => {
    const text = React.createRef();

    let submitValues = () => {
        let lines = text.current.value.split('\n');

        lines.map((line) => {
            let [lat, lng, color] = line.split(',');
            if (latRegExp.test(lat) && lngRegExp.test(lng)) {
                return props.createMarker({ lat, lng, color })
            } else {
                return props.markersError('Invalid input');
            }
        })
    }

    return (
        <>
            <CustomTextarea resize="false" placeholder="lat,lng,color" ref={text} />
            <SubmitButton onClick={submitValues}>Submit</SubmitButton>
            <RemoveButton onClick={props.removeMarkers}>Remove All Markers</RemoveButton>
            {props.error && <Typography color="secondary">{props.error}</Typography>}
        </>
    );
};

const CustomTextarea = styled.textarea`
    width: 100%;
    height: 300px;
    background-color: #fff;
    border: 2px solid #fff;
    z-index: 500;
    `;


const SubmitButton = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    background: #635858;
    color: #fff;
    top: 100%;
    width: 100%;
`;

const RemoveButton = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    background: tomato;
    color: #fff;
    top: 100%;
    width: 100%;
`;

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    createMarker: marker => dispatch(ACTIONS.createMarker(marker)),
    removeMarkers: () => dispatch(ACTIONS.removeMarkers()),
    markersError: error => dispatch(ACTIONS.markersError(error))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

