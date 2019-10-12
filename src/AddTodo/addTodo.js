import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todo: ''
    }
  }
  
  render() {
    return (
      <div className="addTodoContainer">
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input id="addToInput" onChange={(e) => this.updateInput(e)} type="text"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  }
  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFunc(this.state.todo);
    document.getElementById("addToInput").value = "";
  }
}
