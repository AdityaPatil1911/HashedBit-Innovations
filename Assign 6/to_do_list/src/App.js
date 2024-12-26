import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      const newTasks = [...tasks, task.trim()].sort();
      setTasks(newTasks);
      setTask(''); // Clear input field
    }
  };

  // Remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add task on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task"
          style={{ padding: '5px', width: 'calc(100% - 90px)', marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '5px 10px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 0',
              borderBottom: '1px solid #ccc',
            }}
          >
            <span>{t}</span>
            <button
              onClick={() => removeTask(index)}
              style={{
                padding: '2px 5px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
