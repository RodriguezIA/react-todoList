/* eslint-disable react/prop-types */
import "./Task.css"
import { CiCalendar   } from 'react-icons/ci'
import { IoChatbubbleOutline } from "react-icons/io5";
import { GiPaperClip } from "react-icons/gi";

export function Task ({task}){
    return(
        <div className="task">
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <p className="task-value">{task.value}</p>
                <div className="task-information">
                    <div className="info">
                        <CiCalendar />
                        Date
                    </div>
                    <div className="info">
                        <IoChatbubbleOutline/>
                        comments
                    </div>
                    <div className="info">
                        <GiPaperClip />
                        attackment
                    </div>
                </div>
                <div>
                    tags
                </div>
            </div>
        </div>
    )
}