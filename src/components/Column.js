import React from 'react';
import TaskCard from './TaskCard';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Column({ column }) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <div className="tasks">
        {column.tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
