import React, { useState } from 'react'
import search from "../src/Assets/search.png";
import './Dashboard.css';
const Dashboard = () => {
    const [cpending,setCpending]=useState(20);
    const [approve,setApprove]=useState(14);

  return (

    <div>
    <div className="dash"> 
        <div style={{fontSize:"25px",textAlign:"center",marginLeft:"25px"}}> My Dashboard</div>
        <img style={{marginLeft:"3%"}} src={search}  alt="seatch" width="40" height="10"/>

    </div>
    <div style={{padding:"15px",backgroundColor:"#D9D9D9",fontSize:"20px",width:"100%"}}> My Acctionable</div>
    <div style={{display:"flex"}} className='request'>
        <div className='pending'>{cpending}</div>
        <div className='pendText'>  View Pending Request</div>
    </div>
    <div className='request'> 
    <div className='pending'>{approve}</div>
    <div className='pendText'>Case Approved</div>
        
    </div>
    </div>



  )
}

export default Dashboard