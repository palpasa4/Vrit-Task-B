import React from 'react';
import {DragDropContext, Draggable } from 'react-beautiful-dnd';

function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task}
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
