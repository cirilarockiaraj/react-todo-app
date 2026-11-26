import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoCard from "./components/TodoCard";

function App() {
  const [taskName, setTaskName] = useState();
  const [taskDesc, setTaskDesc] = useState();
  const [tasks, setTasks] = useState([]);
  const [filteredTask, setFilterTask] = useState("All");
  const [currentId, setCurrentId] = useState(null);

  const filterdTaskList = tasks.filter((task) => {
    if (filteredTask === "All") return true;
    return task.status === filteredTask;
  });

  const createUpdateTask = () => {
    if (!taskName) {
      alert("Please enter the task name");
      return;
    }
    if (currentId) {
      const data = tasks.map((task) =>
        task.id == currentId
          ? { ...task, taskName: taskName, taskDesc: taskDesc }
          : task,
      );
      setTasks(data);
    } else {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          taskName: taskName,
          taskDesc: taskDesc,
          status: "Not Completed",
        },
      ]);
    }
    setTaskName("");
    setTaskDesc("");
    setCurrentId("");
  };

  const setUpdateTodo = (id) => {
    setCurrentId(id);
    const updateTask = tasks.find((task) => task.id == id);
    setTaskName(updateTask.taskName);
    setTaskDesc(updateTask.taskDesc);
  };

  const updateTaskStatus = (id, status) => {
    const data = tasks.map((task) =>
      task.id == id ? { ...task, status } : task,
    );
    setTasks(data);
  };

  const deleteTask = (id) => {
    if (confirm("Do you want to delete it?")) {
      const data = tasks.filter((task) => task.id !== id);
      setTasks(data);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="body-container">
        <div className="form-container">
          <Form
            taskName={taskName}
            setTaskName={setTaskName}
            taskDesc={taskDesc}
            setTaskDesc={setTaskDesc}
            createTask={createUpdateTask}
            currentId={currentId}
          />
        </div>
        <div className="todo-container">
          <div className="todo-head">
            <h3>My Tasks</h3>
            <select
              value={filteredTask}
              onChange={(e) => setFilterTask(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Not Completed">Not Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <hr />

          {tasks.length > 0 ? (
            filterdTaskList.length > 0 ? (
              filterdTaskList.map((task) => (
                <TodoCard
                  id={task.id}
                  task={task}
                  setUpdateTodo={setUpdateTodo}
                  updateTaskStatus={updateTaskStatus}
                  deleteTask={deleteTask}
                />
              ))
            ) : (
              <h4 style={{ textAlign: "center" }}>
                <i>No results for this status...</i>
              </h4>
            )
          ) : (
            <h4 style={{ textAlign: "center" }}>
              <i>Create your tasks</i>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
