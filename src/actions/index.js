const addRoutePoint = (label) => {
    return {
        type: 'ADD_ROUTE_POINT',
        payload: label
    };
};

const deleteRoutePoint = (id) => {
    return {
        type: 'DELETE_ROUTE_POINT',
        payload: id
    };
};

const updateSequenceOfPoints = (result) =>{
    return{
        type: 'UPDATE_SEQUENCE_OF_POINTS',
        payload: result
    }
};

const updateCenter = (center) =>{
  return {
      type: 'UPDATE_CENTER',
      payload: center
  }
};

export {
    addRoutePoint,
    deleteRoutePoint,
    updateSequenceOfPoints,
    updateCenter
};