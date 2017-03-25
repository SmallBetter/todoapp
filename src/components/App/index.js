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

  showFinish = () => {
    this.setState({
      show: {
        showFinish: true,
        showUnFinish: false,
      },
    })
  }

  showUnFinish = () => {
    this.setState({
      show:
      {
        showFinish: false,
        showUnFinish: true,
      },
    })
  }

  showAll = () => {
    this.setState({
      show:
      {
        showFinish: true,
        showUnFinish: true,
      },
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
        <ShowTodoList handleAll={this.showAll} handleFinish={this.showFinish} handleUnFinish={this.showUnFinish} />
        <TodoList {...this.state} handleToggle={this.toggleTodo} handleRemove={this.removeTodo} />
      </div>
    )
  }
}

export default App
