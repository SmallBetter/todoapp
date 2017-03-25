import React from 'react'
import './style.css'


const ShowTodoList = ({ handleAll, handleFinish, handleUnFinish }) => (
  <div>
    <button onClick={handleAll}>All</button>
    <button onClick={handleFinish}>Finish</button>
    <button onClick={handleUnFinish}>UnFinish</button>
  </div>
)

ShowTodoList.propTypes = {
  handleAll: React.PropTypes.func.isRequired,
  handleFinish: React.PropTypes.func.isRequired,
  handleUnFinish: React.PropTypes.func.isRequired,
}

export default ShowTodoList
