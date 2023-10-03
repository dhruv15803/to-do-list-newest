import React from 'react'
import { ToastContainer } from 'react-toastify'

const Pending = (props) => {
  return (
    <>
    <div className="pending-outer-container">
        <div className="pending-child-container">
            <h1>Your tasks</h1>
            {props.tasks.length===0 &&
            <div className="no-tasks" style={{margin:'10px 0px'}}>
                No tasks pending
            </div>}
            <div className="pending-tasks-container">
                {props.tasks.map((item,index)=>{
                    return <div className="pending-task-item">
                    <div className="pending-task">
                        <div className="pending-task-title">
                            {item.task}
                        </div>
                        {item.show && <div className="pending-task-description">
                            {item.description}
                        </div>}
                    </div>
                    {item.description.trim()!=='' && <div className="pending-arrow" onClick={()=>props.changeShowTasks(index)}>
                        {item.show ? <i className="fa-solid fa-arrow-up" style={{color:'#00000'}}></i>:<i className="fa-solid fa-arrow-down" style={{color:'#00000'}}></i>}
                    </div>}
                    <div className="pending-task-delete" onClick={()=>props.deleteTask(index)}>
                        <i className="fa-solid fa-trash" style={{color:'#00000'}}></i>
                    </div>
                    <div className="pending-task-complete" onClick={()=>props.completeTask(index)}>
                        <i className="fa-solid fa-check" style={{color:'#00000'}}></i>
                    </div>
                </div>
                })}
            </div>
            {props.tasks.length!==0 && <div className="clear-tasks">
                <button className="btn" onClick={props.clearTasks}>Clear tasks</button>
            </div>}
        </div>
        <form className="pending-form" onSubmit={props.addTask}>
            <input value={props.formData.task} onChange={props.handleChange} type="text" name="task" id="task" placeholder='Enter a task' className='inputBox'/>
            <input value={props.formData.description} onChange={props.handleChange} type="text" name="description" id="description" placeholder='Enter description' className='inputBox'/>
            <button className="btn">Add task</button>
        </form>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default Pending