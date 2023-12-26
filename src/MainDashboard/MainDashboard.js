import React from 'react'
import "./MainDashboard.css";
import { useState } from 'react';
import Ntb from '../NTBComponent/Ntb';
const MainDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('ntb');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
        <div className="dash"> 
        <div style={{fontSize:"22px",textAlign:"center",marginLeft:"40px"}}> My Dashboard</div>
        <div style={{fontSize:"22px"}}> Logout</div>
    </div>

    <div className="tabs-container">
      <div className={`tab ${selectedTab === 'ntb' ? 'active' : ''}`} onClick={() => handleTabClick('ntb')}>
        NTB
      </div>
      <div className={`tab ${selectedTab === 'etb' ? 'active' : ''}`} onClick={() => handleTabClick('etb')}>
        ETB
      </div>
      <div className={`tab ${selectedTab === 'etb2' ? 'active' : ''}`} onClick={() => handleTabClick('etb2')}>
        ETB Reduction
      </div>
      <div className={`tab ${selectedTab === 'other' ? 'active' : ''}`} onClick={() => handleTabClick('etb3')}>
        Others
      </div>
      </div>

        {/* Conditionally render content based on the selected tab */}
        {selectedTab === 'ntb' && <Ntb />}
      {selectedTab === 'etb' && <Ntb/>}
      {selectedTab === 'etb2' && <Ntb/>}
      {selectedTab === 'other' && <Ntb />}

    </div>
  )
}

export default MainDashboard