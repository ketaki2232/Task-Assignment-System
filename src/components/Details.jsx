import React from 'react'
import { Link } from 'react-router-dom';
const Details = () => {
  return (
    <div>
         <div className="container">
        <div className="content">
          <div className="head flex h-c">Task Details</div>
          <div className="complete_detail">Complete Project Report</div>
          <div className="detailtask listinput">
            <div className="name">Description : &nbsp;</div> <div className="val">Prepare and finalize the project report for the client meeting</div>
          </div>
          <div className="detailtask listinput">
            <div className="name">Assignee : &nbsp;</div> <div className="val">John Dae</div>
          </div>
          <div className="detailtask listinput">
            <div className="name">Deue Date : &nbsp;</div> <div className="val">2024-06-15</div>
          </div>
          <div className="detailtask listinput">
            <div className="name">Priority &nbsp;</div> <div className="val">High</div>
          </div>

          <div className="green_text">
            <div><Link to="New">Update Task</Link></div>
            <div><Link to="List">Back to Task List</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details