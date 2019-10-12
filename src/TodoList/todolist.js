import React, { Component } from 'react';
import TodoItem from '../TodoItem/todoitem';

export default class TodoList extends Component {
  render() {

    const { todos } = this.props;

    return (
      <div className="todoListContainer">
        {
          todos.map( (_todo, _index) => {
            return(
              <TodoItem updateTodoFunc={this.props.updateTodoFunc} key={_index} todo={_todo}></TodoItem>
            )
          })
        }
      </div>
    )
  }

  updateTodo = (todo) => {
    this.props.updateTodoFunc(todo);
  }
}
