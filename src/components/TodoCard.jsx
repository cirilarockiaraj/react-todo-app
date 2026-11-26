import React from "react";

const TodoCard = ({task, setUpdateTodo, updateTaskStatus, deleteTask}) => {
  return (
    <div className="todo-card">
      <div className="todo-head">
        <h3>{task.taskName}</h3>
        <div className="btn-group">
          <button className="edit-btn" onClick={() => (setUpdateTodo(task.id))}>
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button className="delete-btn" onClick={() => (deleteTask(task.id))}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      <div className="todo-body">
        <p>{task.taskDesc}</p>
        <div className="status-group">
          <span 
          className={task.status==="Not Completed" ? "pending" : task.status === "In Progress" ? "inprogress" : "completed"}>
          {task.status === "Not Completed" ? "Pending" : task.status}
          </span>
          <select value={task.status} onChange={(e) => updateTaskStatus(task.id, e.target.value)}>
            <option value="Not Completed">Not Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
