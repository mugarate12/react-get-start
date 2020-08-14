import React from 'react';
import TodoList from './TodoList'
import '../w3.css'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div class="w3-container w3-center">
          <h1 class="w3-container w3-teal">{this.props.title}</h1>
          <TodoList items={this.state.items} />
          <form class="w3-container" onSubmit={this.handleSubmit}>
            <p>
              <label class="w3-text-teal"><b>O que precisa ser feito?</b></label>
            </p>
          
            {/* <label htmlFor="new-todo">
              O que precisa ser feito?
            </label> */}
            <input
              class="w3-input w3-border w3-light-grey" type="text"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <div lass="w3-display-container">
              <button class="w3-btn w3-teal w3-display-middle ">
                Adicionar #{this.state.items.length + 1}
              </button>
            </div>
            
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
}

export default TodoApp;