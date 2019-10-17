const Types = {
  CREATE_MARKER: "CREATE_MARKER",
  DELETE_MARKER: "DELETE_MARKER",
  CHANGE_MARKER: "CHANGE_MARKER",
  REMOVE_MARKERS: "REMOVE_MARKERS",
  MARKERS_ERROR: "MARKERS_ERROR",
  SET_ZOOM: "SET_ZOOM",
  SET_CENTER: "SET_CENTER"
};
// actions
const createMarker = marker => ({
  type: Types.CREATE_MARKER,
  payload: marker
});

const changeMarker = id => ({
  type: Types.CHANGE_MARKER,
  payload: id
})

const deleteMarker = id => ({
  type: Types.DELETE_MARKER,
  payload: id
});

const removeMarkers = () => ({
  type: Types.REMOVE_MARKERS,
})

const markersError = error => ({
  type: Types.MARKERS_ERROR,
  payload: error
})

const setZoom = num => ({
  type: Types.SET_ZOOM,
  payload: num
})

const setCenter = center => ({
  type: Types.SET_CENTER,
  payload: center
})

export default {
  createMarker,
  deleteMarker,
  changeMarker,
  removeMarkers,
  markersError,
  setZoom,
  setCenter,
  Types
};