import React from 'react';
import '../w3.css'

class TodoList extends React.Component {
    render() {
        return (
            <ul class="w3-ul">
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default TodoList;