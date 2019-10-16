import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Marker = (props) => {
  return (
    <CustomMarker color={props.color} onContextMenu={() => props.onRightClick()} />
  );
};

const CustomMarker = styled.div`
  position: absolute;
  border-radius: 50% 50% 50% 0;
  border: 4px solid ${props => props.color};
  width: 20px;
  height: 20px;
  transform: rotate(-45deg) translate(0%, -70%);
  transition: transform 0.3s ease;
  user-select: none;
  cursor: pointer;
  &::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    background-color: ${props => props.color};
  }
`

Marker.propTypes = {
  onRightClick: PropTypes.func.isRequired
}

export default Marker;