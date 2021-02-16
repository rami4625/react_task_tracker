import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasksState, setTasks] = useState([
    {
      id: 1,
      name: 'Training',
      day: 'Feb 4th at 6:00PM',
      reminder: true,
    },
    {
      id: 2,
      name: 'Swiming',
      day: 'Feb 6th at 2:00PM',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = id => {
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
  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasksState, newTask]);
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
