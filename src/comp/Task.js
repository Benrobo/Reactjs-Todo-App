import React from 'react'
import { Todos } from './Todos'


export const Task = ({task, setTask}) => {
    return (
        <Todos task={task} setTask={setTask}/>
    )
}
