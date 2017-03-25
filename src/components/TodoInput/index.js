import React, { Component } from 'react'
import './style.css'

class TodoInput extends Component {

  state = {
    text: '',
  }

  handletext = event => {
    this.setState({
      text: event.target.value,
    })
  }

  handleEnter = event => {
    if (event.key === 'Enter' && this.state.text.length) {
      this.props.handleAddTodo(this.state.text)
      this.setState({
        text: '',
      })
    }
  }

  render() {
    return (
      <p><input type="text" onKeyPress={this.handleEnter} value={this.state.text} onChange={this.handletext} placeholder="List" /></p>
    )
  }
}

TodoInput.propTypes = {
  handleAddTodo: React.PropTypes.func.isRequired,
}

export default TodoInput
