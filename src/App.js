import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasksState, setTasks] = useState([]);

  useEffect( () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasksState.filter(item => item.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = id => {
    setTasks(tasksState.map(item =>
      item.id === id ?
      {...item, reminder: !item.reminder} :
      item
    ));
  }

  // Add Task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await response.json()
    setTasks([...tasksState, data])
    
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasksState, newTask]);
  }

  return (
    <div className="container">
      <Header
        title='Task Tracker'
        addStatus={showAddTask}
        onClickAdd={() => setShowAddTask(!showAddTask)}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasksState.length > 0 ?
      <Tasks
        tasks={tasksState}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> :
      'There is No Tasks'}
    </div>
  );
}

export default App;
