import React from 'react'
import './style.css'

const TodoItem = ({ id, text, finish, handleToggle, handleRemove }) => {
  const finishColor = finish ? 'finish' : 'unfinish'
  return (
    <li>
      <span className={finishColor} onClick={() => handleToggle(id)}>{text}</span>
      <input className="buttonkey" onClick={() => handleRemove(id)} type="button" value="X" />
    </li>
  )
}

TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  finish: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
}

export default TodoItem
