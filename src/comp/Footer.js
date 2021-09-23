import React from 'react'

export const Footer = ({task}) => {
    return (
        <div className="footer">
            <p>You have <b/>{task.length} task</p>
        </div>

    )
}
