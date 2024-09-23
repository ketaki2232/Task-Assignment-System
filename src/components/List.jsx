import React from 'react'
import { Link } from 'react-router-dom';
const List = () => {
  return (
    <div>
        <div className="container">
        <div className="content">
          <div className="head flex h-c">Task List</div>
          <div className="list_page flex">
            <div className="complete">Complete Project Report</div>
             <div className="view_details"><Link to="Details">View Details</Link></div>
          </div>
          <div className="list_detail">
            <div className="listinput flex">
              <div className="name">Assignee : &nbsp; </div> <div className="val">John Doe</div>
            </div>
            <div className="listinput flex">
              <div className="name">Due Date : &nbsp;</div> <div className="val">2024-08-15</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default List