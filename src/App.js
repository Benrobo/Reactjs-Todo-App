import React, {useState} from 'react'
import { Footer } from './comp/Footer'
import { Header } from './comp/Header'
import { Task } from './comp/Task'
import "./style.css"

function App() {

    const [task, setTask] = useState([
        {
            id: 1,
            task: "drink water",
            done: false
        },
        {
            id: 2,
            task: "fetch water",
            done: true
        },
        {
            id: 3,
            task: "Repent from my sin",
            done: true
        }
    ])
    
    return (
        <div className="main-cont">
           <Header task={task} setTask={setTask} />
           <Task task={task} setTask={setTask}/>
           <Footer task={task}/>
        </div>
    )
}

export default App