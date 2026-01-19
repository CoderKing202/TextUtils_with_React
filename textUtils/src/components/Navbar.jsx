import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [activeMenu,setActiveMenu] = useState("Home")
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/React_with_Harry/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link onClick={()=>{setActiveMenu("Home")}} className={`nav-link ${activeMenu === "Home"?"active":""}`} aria-current="page" to="/React_with_Harry/">Home</Link>
        </li>
        <li className="nav-item" >
          <Link onClick={()=>{setActiveMenu("About")}} className={`nav-link ${activeMenu === "About"?"active":""}`} aria-current="page" to="/React_with_Harry/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>props.toggleMode('light')} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>props.toggleMode('dark')} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.defaultProps = {
  title:"Set Title here",

}
Navbar.propTypes = {
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string,
}