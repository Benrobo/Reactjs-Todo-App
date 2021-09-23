import { Delete } from '@material-ui/icons'
import IconButton from '@mui/material/IconButton'
import React from 'react'

export const Todos = ({task, setTask}) => {

    function deleteTask(id){
        let newtask = task.filter(task=>{
            return task.id !== id
        })

        setTask(newtask)
    }

    function changeReminder(id){
        setTask(task.map((task)=>task.id === id ? {...task, done: !task.done} : task))
    }

    return (
        <div className="content-body">
            {task.length === 0 ? <h3>Nothing to show.</h3> :
                task.map(todo =>(
                    <div key={todo.id} className={todo.done === true ? "done task-cont" : "task-cont"} onDoubleClick={()=>{changeReminder(todo.id)}}>
                        <span>{todo.task}</span>
                            <IconButton onClick={()=>{
                                deleteTask(todo.id)
                            }}>
                                <Delete />
                            </IconButton>
                    </div>
                ))
            }
        </div>
    )
}
