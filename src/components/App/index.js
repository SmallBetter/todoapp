import React, { Component } from 'react'
import ShowTodoList from '../ShowTodoList'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import logo from '../App/assets/logo.svg'
import './style.css'

class App extends Component {

  state = {
    todos: [],
    show: {
      showFinish: true,
      showUnFinish: true,
    },
  }

  showList = (showFinish, showUnFinish) => {
    this.setState({
      show: { showFinish, showUnFinish },
    })
  }

  addTodo = text => {
    const todos = this.state.todos
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text,
          finish: false,
        },
      ],
    })
  }

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, finish: !todo.finish } : todo),
    })
  }

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => id ? todo.id !== id : todo),
    })
  }

  render() {
    return (
      <div className="App"><div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoInput handleAddTodo={this.addTodo} />
      </div>
        <ShowTodoList handleShowList={this.showList} />
        <TodoList {...this.state} handleToggle={this.toggleTodo} handleRemove={this.removeTodo} />
      </div>
    )
  }
}

export default App
