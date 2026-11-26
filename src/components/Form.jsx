import React from "react";

const Form = ({taskName, setTaskName, taskDesc, setTaskDesc, createTask, currentId}) => {
  
  const clearForm = () =>{
    setTaskName("");
    setTaskDesc("");
  }
  
  return (
    <div className="form">
      <div className="form-head">
        <i className={`fa-solid ${currentId ? "fa-pencil" : "fa-file-import"}`}></i>
        <h3>{currentId ? "Update" : "Add"} Task</h3>
      </div>
      <hr />
      <div className="field-set">
        <label htmlFor="taskName">Task *</label>
        <input type="text" value={taskName} onChange={(e)=>(setTaskName(e.target.value))} required="" />
      </div>
      <div className="field-set">
        <label htmlFor="taskDesc">Description</label>
        <textarea name="taskDesc" value={taskDesc} onChange={(e)=>(setTaskDesc(e.target.value))} rows={3}></textarea>
      </div>
      <div className="button-set">
        <button onClick={clearForm} className="clear-btn">Clear</button>
        <button onClick={createTask} className="add-btn">{currentId ? "Update": "Add"}</button>
      </div>
    </div>
  );
};

export default Form;
