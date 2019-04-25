import React from 'react';
import { connect } from 'react-redux';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';

import RoutePoint from '../route-point';
import { updateSequenceOfPoints } from '../../actions';
import './route-point-list.css';

const RoutePointList =( { routeItems,onDragEnd } ) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <ul className={snapshot.isDraggingOver ? "route-list list-group droppable" : "route-list list-group"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>

                        {routeItems.map((item, index) => (
                            <RoutePoint key={item.id}
                                        item={item}
                                        index={index}/>
                        ))}

                        {provided.placeholder}

                    </ul>)
                }

            </Droppable>
        </DragDropContext>

    )
} ;

const mapStateToProps = ({ routeItems }) => {
    return { routeItems };
};

const mapDispatchToProps = {
        onDragEnd: (result) => updateSequenceOfPoints(result)

};

export default connect(mapStateToProps,mapDispatchToProps)(RoutePointList);