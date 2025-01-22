import React from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import Column from './components/Column';

function App() {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
