import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName) return;

    const newTask = {
      id: new Date().getTime().toString(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'Active') return !task.completed;
    if (activeTab === 'Complete') return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1 className="title">#todo</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'All' ? 'active' : ''}`}
            onClick={() => setActiveTab('All')}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'Active' ? 'active' : ''}`}
            onClick={() => setActiveTab('Active')}
          >
            Active
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'Complete' ? 'active' : ''}`}
            onClick={() => setActiveTab('Complete')}
          >
            Completed
          </button>
        </li>
      </ul>
      
      {activeTab !== 'Complete' && (
        <form onSubmit={handleAddTask}>
          <input type="text" value={taskName} onChange={handleTaskNameChange} />
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
      )}
      
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item ${
              task.completed ? 'list-group-item-success' : ''
            }`}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
              />
              <label className="form-check-label" style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.name}
              </label>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteTask(task.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {activeTab === 'Complete' && (
        <div>
          <button
            className="btn btn-danger"
            onClick={handleDeleteAllTasks}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
