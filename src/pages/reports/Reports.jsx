import React from 'react';
import FeaturedService from '../../components/featuredInfo/FeaturedService';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import "./reports.css"
function Reports() {
  return (
    <div>
      <Topbar />
      <div className="container">

        <Sidebar />
        <div className='home'>
          <FeaturedService />
        </div>
      </div>
    </div>
  );
}

export default Reports;
