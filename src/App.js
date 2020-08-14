import React from 'react';
import './App.css';
import TodoApp  from './components/TodoApp';

/**
 * Conceitos importantes do react:
 * Component
 * Propriedade
 * Estado & imutabilidade
 */

function App() {
  return (
      <TodoApp title="My ToDoApp" />
  );
}

export default App;
