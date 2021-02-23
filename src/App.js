import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from "./components/Footer";
import About from "./components/About";

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

  // Fetch Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await response.json()

    setTasks(tasksState.map(item =>
      item.id === id ?
      {...data} :
      item
    ))
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
    <Router>
      <div className="container">
        <Header
          title='Task Tracker'
          addStatus={showAddTask}
          onClickAdd={() => setShowAddTask(!showAddTask)}
        />

        <Route path="/" exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasksState.length > 0 ?
            <Tasks
              tasks={tasksState}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            /> :
            'There is No Tasks'}
          </>
        )} />

        <Route path='/about' component={About} />

        <Footer />

      </div>
    </Router>
  )
}

export default App;
