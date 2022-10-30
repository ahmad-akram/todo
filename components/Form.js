import { useState } from "react";
const Form=(props)=>{
    const[text,setText]=useState('');
    const[day,setDay]=useState('');
    const[reminder,setReminder]=useState(false);

    return(
        <form action="/" className="form">
            <label htmlFor="">Task</label>
            <br />
            <input style={{marginTop:'5px',marginBottom:'5px'}} className="form-input" type="text" name="text" placeholder="Add Task"  value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <br />
            <label htmlFor="" >Day & Time</label>            
            <input type="datetime" style={{marginTop:'5px',marginBottom:'5px'}} className="form-input" name="date-time" id="" placeholder="Add Day & Time" value={day} onChange={(e)=>{setDay(e.target.value)}}/>
            <br />
            <label htmlFor="" style={{marginTop:'5px'}}>Reminder</label>
            <input type="checkbox" name="" id="" style={{marginLeft:'10vw'}} value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
            <br />
            <button type="submit" className="add-task-button" onClick={(e)=>{
                e.preventDefault();
                if(text===''){
                    alert('Please enter a task')
                }
                else {
                    props.onSubmit({text:text,day:day,reminder:reminder,id:Math.floor(Math.random() * 100)});
                    setText('');
                    setDay('');
                    setReminder(false);
                }
                }
                }>Add Task</button>
        </form>
    )
}
export default Form;