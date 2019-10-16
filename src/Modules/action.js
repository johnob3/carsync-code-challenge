const Types = {
    CREATE_MARKER: "CREATE_MARKER",
    DELETE_MARKER: "DELETE_MARKER",
    CHANGE_MARKER: "CHANGE_MARKER",
    REMOVE_MARKERS: "REMOVE_MARKERS",
    MARKERS_ERROR: "MARKERS_ERROR"
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

  const removeMarkers = markers => ({
    type: Types.REMOVE_MARKERS,
  })

  const markersError = error => ({
    type: Types.MARKERS_ERROR,
    payload: error
  })
  
  export default {
    createMarker,
    deleteMarker,
    changeMarker,
    removeMarkers,
    markersError,
    Types
  };