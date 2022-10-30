import ContainerHeader from "./ContainerHeader"
import Task from './Task'
import Form from "./Form";
import { useState } from "react";

function Container() {
    const [current, update] = useState([
        {
            id: 1,
            text: "wash dishes",
            day: "Feb 5th at 2:30pm",
            reminder: true,
            completed: true
        },
        {
            id: 2,
            text: "wash clothes",
            day: "Feb 6th at 12:30am",
            reminder: true,
            completed: false
        },
        {
            id: 3,
            text: "wash him",
            day: "Feb 7th at 3:30pm",
            reminder: true,
            completed: true
        },
        {
            id: 4,
            text: "watch movie",
            day: "Feb 6th at 9:30pm",
            reminder: false,
            completed: false
        },
    ])
    function deleteTask(id) {
        update(current.filter(el => el.id !== id))
    }
    function toggleReminder(id){
       update(current.map((el)=>el.id===id?{...el,reminder:!el.reminder}:el))
    }
    function addTask(task){
        update([...current,task]);
    }
    const [showForm,setShowForm]=useState(false);
    return (
        <div className="container">
            <ContainerHeader buttonClick={()=>{setShowForm(!showForm)}} formshowed={showForm}/>
            {showForm && <Form onSubmit={addTask}/>}
            {current.length > 0 ? current.map(task => <Task key={task.id} task={task} delete={deleteTask}  toggleReminder={toggleReminder}/>) : <p className="empty-message">No Tasks Pending! yaaay</p>}
        </div>
    )
}
export default Container;
