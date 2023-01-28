import React from 'react'

function Task(props) {

  return (
    <div>
        <li>{props.text}</li>
        <button onClick={props.onDeleteTask}>Delete</button>
    </div>
  )
}

export default Task