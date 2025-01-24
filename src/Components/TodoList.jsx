import React, { useState } from 'react';
import { Container, Typography} from "@mui/material";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState(''); 
  const [editingTaskId, setEditingTaskId] = useState(null); 
  const [editText, setEditText] = useState(''); 

  function addTask() {
    const newTask = { id: Date(), text };
    setTasks([...tasks, newTask]); 
    setText(''); 
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id, currentText) {
    setEditingTaskId(id); 
    setEditText(currentText); 
  }

  function saveTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText } : task
      )
    );
    setEditingTaskId(null); // Exit edit mode
    setEditText(''); // Clear editing input
  }

  return (
    <Container maxWidth="xl" sx={{ marginBottom: 4, marginTop: 5 }}>
       <Typography variant="h3"  sx={{fontWeight: "800", marginBottom: "20px", color: "#31425B", }}>
            Add New List
            </Typography>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new task"  />
      <button onClick={addTask}>  Add  </button>

      {/* List of tasks */}
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
             <>
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => saveTask(task.id)}>
                  Save
                </button>
                <button onClick={() => setEditingTaskId(null)}>
                  Cancel
                </button>
              </>
            ) : (

              <>
                <span>
                  {task.text}
                </span>
                <button onClick={() => editTask(task.id, task.text)}>
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TodoList;
