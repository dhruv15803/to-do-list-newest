import React from 'react'
import { Link } from 'react-router-dom'

const Completed = (props) => {
  return (
    <>
    <div className="completed-outer-container">
    <div className="completed-child-container">
            <h1>Completed tasks</h1>
            {props.complete.length===0 &&
            <div className="no-tasks" style={{margin:'10px 0px'}}>
                No completed tasks. <Link to='/'>Click here</Link>
            </div>}
            <div className="completed-tasks-container">
                {props.complete.map((item,index)=>{
                    return <div className="completed-task-item">
                    <div className="completed-task">
                        <div className="completed-task-title">
                            {item.task}
                        </div>
                        {item.show && <div className="completed-task-description">
                            {item.description}
                        </div>}
                    </div>
                    {item.description.trim()!=='' && <div className="completed-arrow" onClick={()=>props.changeShowComplete(index)}>
                        {item.show ? <i className="fa-solid fa-arrow-up" style={{color:'#00000'}}></i>:<i className="fa-solid fa-arrow-down" style={{color:'#00000'}}></i>}
                    </div>}
                    {/* <div className="completed-task-delete" onClick={()=>props.deleteTask(index)}>
                        <i className="fa-solid fa-trash" style={{color:'#00000'}}></i>
                    </div>
                    <div className="completed-task-complete" onClick={()=>props.completeTask(index)}>
                        <i className="fa-solid fa-check" style={{color:'#00000'}}></i>
                    </div> */}
                </div>
                })}
            </div>
            {props.complete.length!==0 && <div className="clear-tasks">
                <button className="btn" onClick={props.clearComplete}>Clear tasks</button>
            </div>}
        </div>
    </div>
    </>
  )
}

export default Completed