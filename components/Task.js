import {BsXLg} from 'react-icons/bs'

const Task = (props) => {
    

    return (
        <div className={`task ${props.task.reminder?'reminderon':''}`} onDoubleClick={()=>{props.toggleReminder(props.task.id)}}>
            <div className='task-info'>
                <h3>{props.task.text}</h3>
                <p>{props.task.day}</p>
            </div>
            <div className='x-icon'>
                <BsXLg style={{cursor:"pointer"}} onClick={()=>{props.delete(props.task.id)}}/>
            </div>
        </div>
    )
}
export default Task;