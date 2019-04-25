const initialState = {
    routeItems: [
        {id: "point1", label: "Точка маршрута 1", type: "wayPoint", point : [+55.76545256609763 , +37.63843588417699]},
        {id: "point2", label: "Точка маршрута 2", type: "wayPoint", point : [+55.758136686496066 , +37.634206428527825]},
        {id: "point3", label: "Точка маршрута 3", type: "wayPoint", point : [+55.756151881305726 , +37.64149846450797]},
    ],
    center: [55.76, 37.64]
};

const addPoint = (state, label) =>{
    const { routeItems, center } = state;
    const item = {
        id: `point${routeItems.length+1}`,
        label,
        type: "wayPoint",
        point: center
    };

    return { ...state, routeItems: [...state.routeItems, item] }
};

const deletePoint = (state, id) =>{
    const idx = state.routeItems.findIndex((item) => item.id === id);
    const items = [
        ...state.routeItems.slice(0, idx),
        ...state.routeItems.slice(idx + 1)
    ];
    return { ...state, routeItems: items };
};

const dragEnd =(state, result)=>{
    const {destination, source, draggableId} = result;

    if (!destination) return;

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) return;

    const pointIds = state.routeItems.map(item=>item.id);
    pointIds.splice(source.index, 1);
    pointIds.splice(destination.index, 0, draggableId);

    const newItems = pointIds.map(itemId => {
        const routeItem = state.routeItems.filter(item => (item.id === itemId));
        return {...routeItem[0]};
    });

    return {...state, routeItems: newItems};
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ROUTE_POINT':
            return deletePoint(state, action.payload);

        case 'ADD_ROUTE_POINT':
            return addPoint(state, action.payload);

        case 'UPDATE_SEQUENCE_OF_POINTS' :
            return dragEnd(state, action.payload);

        case 'UPDATE_CENTER':
            return {...state, center: action.payload};

        default:
            return state;
    }
};

export default reducer;