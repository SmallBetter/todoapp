import React from 'react'
import './style.css'


const ShowTodoList = ({ handleShowList }) => (
  <div>
    <button onClick={() => handleShowList(true, true)}>All</button>
    <button onClick={() => handleShowList(true, false)}>Finish</button>
    <button onClick={() => handleShowList(false, true)}>UnFinish</button>
  </div>
)

ShowTodoList.propTypes = {
  handleShowList: React.PropTypes.func.isRequired,
}

export default ShowTodoList
