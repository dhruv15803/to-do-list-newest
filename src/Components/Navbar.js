import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  return (
    <>
    <nav id="navbar">
        <Link to='/'>
            <div id="navLeft">
                <i className="fa-solid fa-list-check" style={{color:'#ffffff'}}></i>
            </div>
        </Link>
        <Link to='/completed'>
            <div id="navRight">
                <i className="fa-solid fa-check" style={{color:'#ffffff'}}></i>
                {props.complete.length!==0 && <div className="completeCount">
                    {props.complete.length}
                </div>}
            </div>
        </Link>
    </nav>
    </>
  )
}

export default Navbar