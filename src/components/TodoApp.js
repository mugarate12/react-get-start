import React, { useState } from 'react';
import TodoList from './TodoList'
import '../w3.css'

const TodoApp = ({ title }) => {
    const [items, setItem] = useState([])
    const [text, setText] = useState([])

    return (
      <div class="w3-container w3-center">
        <h1 class="w3-container w3-teal">{title}</h1>
        <TodoList items={items} />

        <form class="w3-container" onSubmit={(e) => handleSubmit(e)}>
          <p>
            <label class="w3-text-teal"><b>O que precisa ser feito?</b></label>
          </p>
        
          <input
            class="w3-input w3-border w3-light-grey" type="text"
            id="new-todo"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder='Digite uma tarefa a ser feita'
          />
          <div lass="w3-display-container">
            <button class="w3-btn w3-teal w3-display-middle ">
              Adicionar #{items.length + 1}
            </button>
          </div>
          
        </form>
      </div>
    )
  
    function handleSubmit(e) {
      e.preventDefault()

      if (text.length === 0) {
        return
      }
      const newItem = {
        text: text,
        id: Date.now()
      }
      setItem([...items, newItem])
    }
}

export default TodoApp
