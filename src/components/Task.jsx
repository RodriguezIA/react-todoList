/* eslint-disable react/prop-types */
import "./Task.css"

export function Task ({task}){
    return(
        <div className="task">
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <p className="task-value">{task.value}</p>
                <div className="task-information">
                    <div>Date</div>
                    <div>comments</div>
                    <div>attackment</div>
                </div>
                <div>
                    tags
                </div>
            </div>
        </div>
    )
}