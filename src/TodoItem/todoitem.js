import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {

    const { todo } = this.props;

    return (
      <div className={"todoItem " + (todo.completed ? "completed " : "")} onClick={this.toggleTodo}>{todo.text}</div>
    );
  }

  toggleTodo= () => {
    this.props.updateTodoFunc(this.props.todo);
  }
}
