import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './Column';
import TaskCard from './TaskCard';

const initialColumns = [
  { id: '1', title: 'To Do', tasks: ['Task 1', 'Task 2'] },
  { id: '2', title: 'In Progress', tasks: ['Task 3'] },
  { id: '3', title: 'Done', tasks: ['Task 4'] },
];

function KanbanBoard() {
    const [columns, setColumns] = useState(initialColumns);
  
    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;
  
      if (!destination) return;  
  
      const sourceColumn = columns.find(col => col.id === source.droppableId);
      const destColumn = columns.find(col => col.id === destination.droppableId);
  
      const reorderTasks = (tasks, sourceIndex, destIndex) => {
        const newTasks = Array.from(tasks);
        newTasks.splice(sourceIndex, 1);
        newTasks.splice(destIndex, 0, draggableId);
        return newTasks;
      };
  
      if (destination.droppableId !== source.droppableId) {
        const newSourceTasks = reorderTasks(sourceColumn.tasks, source.index, -1);
        const newDestTasks = reorderTasks(destColumn.tasks, -1, destination.index);
  
        setColumns(columns.map(col =>
          col.id === source.droppableId ? { ...col, tasks: newSourceTasks } :
          col.id === destination.droppableId ? { ...col, tasks: newDestTasks } :
          col
        ));
      } else {
        const reorderedTasks = reorderTasks(sourceColumn.tasks, source.index, destination.index);
  
        setColumns(columns.map(col =>
          col.id === source.droppableId ? { ...col, tasks: reorderedTasks } : col
        ));
      }
    };
  
    return (
      <div className="kanban-board">
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <Droppable key={column.id} droppableId={column.id} type="task">
              {(provided) => (
                <Column
                  column={column}
                  provided={provided}
                  key={column.id}
                />
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    );
  }

export default KanbanBoard;