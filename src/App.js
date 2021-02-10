import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasksState.filter(item => item.id !== id));
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasksState.length > 0 ?
      <Tasks tasks={tasksState} onDelete={deleteTask} /> :
      'There is No Tasks'}
    </div>
  );
}

export default App;
