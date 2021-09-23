import React, {useState} from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'


export const Form = ({task, setTask}) => {

    const [text, setText]  = useState("")

    function handleTask(e){
        e.preventDefault();

        if(text === "") return;

        setTask([...task, {
            id: Math.floor(Math.random()*1000),
            task: text,
            done: false
        }])
        
        setText("")
    }

    return (
        <>
            <form className="form" onSubmit={handleTask}>
                <Input className="inp" onChange={(e)=>setText(e.target.value)} value={text} />
                <Button onClick={handleTask} variant="contained" className="todo-btn">Add</Button>
            </form>
        </>
    )
}
