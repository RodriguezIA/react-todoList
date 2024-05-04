/* eslint-disable react/prop-types */
import "./Task.css"

export function Task ({task}){
    return(
        <div className="task">
            {task.value}
        </div>
    )
}