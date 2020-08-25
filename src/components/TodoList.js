import React from 'react';
import '../w3.css'

const TodoList = ({ items }) => {
    return (
        <ul class="w3-ul">
            {items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default TodoList
