import React, {useState} from 'react'
import Fab from '@mui/material/Fab'
import AddIcon  from '@material-ui/icons/Add'
import { Form } from './Form'


export const Header = ({task, setTask}) => {

    const [visibility, setVisibility] = useState(false);

    function toggleForm(){
        setVisibility(!visibility)
    }

    return (
        <header className="header">
            <div className="top-header">
                <h1>Task Tracker</h1>
                <Fab color="primary" className="toggle-form" onClick={toggleForm}>
                    <AddIcon  />
                </Fab>
            </div>

            {visibility && <Form  task={task} setTask={setTask} />}
            <hr/>

        </header>
    )
}
