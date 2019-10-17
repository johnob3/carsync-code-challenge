import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import ACTIONS from "../Modules/action";
import { latRegExp, lngRegExp } from '../Constants/config';
import { Typography, Button, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const Sidebar = (props) => {
    const [values, setValues] = React.useState('');

    let submitValues = () => {
        let lines = values.split('\n');

        lines.map((line) => {
            let [lat, lng, color] = line.split(',');
            if (latRegExp.test(lat) && lngRegExp.test(lng)) {
                return props.createMarker({ lat, lng, color })
            } else {
                return props.markersError('Invalid input');
            }
        })
    }

    let handleChange = (e) => {
        setValues(e.target.value);
    }

    return (
        <>
            <CustomTextarea
                label="Batch add"
                placeholder="lat,lng,color"
                multiline
                margin="normal"
                variant="outlined"
                rows={10}
                rowsMax={20}
                onChange={(e) => handleChange(e)}
                value={values} />
            {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
            <SubmitButton startIcon={<LibraryAddIcon />} variant="contained" color="primary" onClick={submitValues}>Submit List</SubmitButton>
            <Button startIcon={<DeleteIcon />} variant="contained" color="secondary" onClick={props.removeMarkers}>Delete Markers</Button>
        </>
    );
};


const ErrorMessage = styled(Typography)`
    color: #9e1a1a;
`
const CustomTextarea = styled(TextField)`
  width: 220px;
  textarea {
      color: #fff !important;
      font-size: 12px;
      &::placeholder {
          color: #ddd;
      }
      &::-webkit-scrollbar-track
        {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

      &::-webkit-scrollbar
        {
            width: 12px;
            background-color: #F5F5F5;
            border-radius: 10px;
        }

       &::-webkit-scrollbar-thumb
        {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #555;
        }
  }
  label {
      color: #fff;
  }
  div {
      padding: 18.5px 0px 14px 18.5px;
  }
`;

const SubmitButton = styled(Button)`
 margin-bottom: 10px !important;
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

