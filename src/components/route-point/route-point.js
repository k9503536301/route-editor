import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './route-point.css';
import {deleteRoutePoint} from "../../actions";
import {connect} from "react-redux";

const RoutePoint = ({item, index, onDelete}) =>{
    return (
        <Draggable draggableId={item.id} index={index} >
            {(provided, snapshot) => (
                <li className={snapshot.isDragging ? 'list-group-item draggable' : 'list-group-item'}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span className="route-item-label">{item.label}</span>

                    <button type="button"
                            className="btn btn-sm btn-link float-right"
                            onClick ={() => onDelete(item.id)}>
                        <i className="fa fa-minus-square"/>
                    </button>
                </li>
            )}
        </Draggable>)

};

const mapDispatchToProps = {
    onDelete: deleteRoutePoint
};

export default connect(null, mapDispatchToProps)(RoutePoint);