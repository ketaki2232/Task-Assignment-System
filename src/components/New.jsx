import React from 'react'
const New = () => {
  return (
    <div className="container">
    <div className="content">
      <div className="head flex h-c">Add New Task</div>
      <div className='new_form'>
        <div className='form_title note'>
          <div className="tasktitle">Task Title :</div>
          <input type="text" />
        </div>

        <div className='form_title note'>
          <div className="tasktitle">Description :</div>
          <input type="text" />
        </div>

        <div className='form_title note'>
          <div className="tasktitle">Assignee :</div>
          <input type="text" />
        </div>

        <div className='form_title note'>
          <div className="tasktitle">Date :</div>
          <input type="date" />
        </div>

        <div className='form_title note'>
          <div className="tasktitle" id='priority'>Priority :</div>
          <select name="priority" id="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div className='form_title note'>
          <button>Add Task</button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default New
