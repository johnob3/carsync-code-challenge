import ACTIONS from "./action";
import { COLORS, center, zoom } from '../Constants/config';
import _ from "lodash";

const defaultState = {
    markers: [],
    COLORS,
    center,
    zoom
};

const markerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_MARKER: {
            let newState = _.cloneDeep(state);
            let { lat, lng } = action.payload;

            // check if there is a duplicate marker
            var duplicates = _.filter(newState.markers, function (marker) {
                return (marker.lat === lat && marker.lng === lng)
            });

            if (duplicates.length > 0) {
                newState.error = 'One or more values are duplicate'
                return newState;
            }

            let color = action.payload.color || state.COLORS[0];
            let newMarker = { lat, lng, color };
            newState.error = null;
            newState.markers.push(newMarker);
            return newState;
        }
        case ACTIONS.Types.DELETE_MARKER: {
            let newState = _.cloneDeep(state);
            newState.markers.splice(action.payload, 1);
            return newState;
        }
        case ACTIONS.Types.CHANGE_MARKER: {
            let newState = _.cloneDeep(state);
            let { COLORS, markers } = newState;
            let id = action.payload;
            let colorId = COLORS.indexOf(markers[id].color) || 0;
            colorId < COLORS.length - 1 ? colorId++ : colorId = 0;
            newState.markers[id].color = COLORS[colorId];
            return newState;
        }
        case ACTIONS.Types.REMOVE_MARKERS: {
            let newState = _.cloneDeep(state);
            newState.markers = [];
            return newState;
        }
        case ACTIONS.Types.MARKERS_ERROR: {
            let newState = _.cloneDeep(state);
            newState.error = action.payload;
            return newState;
        }
        case ACTIONS.Types.SET_ZOOM: {
            let newState = _.cloneDeep(state);
            newState.zoom = action.payload;
            return newState;
        }
        case ACTIONS.Types.SET_CENTER: {
            let newState = _.cloneDeep(state);
            newState.center = action.payload;
            return newState;
        }
        default:
            return state;
    }
};

export default markerReducer;
