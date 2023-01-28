"use strict"
import React, {useState} from 'react'
import Task from './Task'

function TodoMain() {
    const [task, setTask] = useState("")
    const [taskArray, setTaskArray] = useState([])
    const onTaskChange = (event) => {
        setTask(event.target.value)
    }
    const addTask = () => {
        if(task !== "")
        {
            setTaskArray((prevTasks) => {
                return [...prevTasks, task]
            })
            setTask("")
        }
    }

    const deleteTask = (taskName) => {
        const newArr = taskArray.filter((name) => name !== taskName)
        setTaskArray(newArr);
    }

  return (
    <div>
        <h1>My Todo List</h1>
        <input type="text" value={task} placeholder="Add task" onChange={onTaskChange} />
        <button onClick={addTask}>Add</button>
        <ol>
            {taskArray.map((val, index) => {
                return <Task 
                        key={index} 
                        text={val} 
                        onDeleteTask={() => deleteTask(val)}
                        />
            })}
        </ol>
    </div>
  )
}

export default TodoMain

//  input - abcssmksm enter
// [task1, task2, task3,.....] array
