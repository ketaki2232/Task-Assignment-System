import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <div className="container">
        <div className="content">
          <div className="head flex h-c">Welcome to Task Assignment System</div>
          <div className="addtask_tasklist flex h-c">
            <div><Link to="New">Add Task</Link></div>
            <div><Link to="List">Task List</Link></div>
          </div>
          <div className="note">Manage and track tasks efficiently. Use the navigation links to add tasks or view and manage existing ones.</div>
        </div>
      </div>
    </div>
  )
}

export default Home