import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasksState, setTasks] = useState([
    {
      id: 1,
      text: 'Training',
      day: 'Feb 4th at 6:00PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Swiming',
      day: 'Feb 6th at 2:00PM',
      reminder: true,
    },
  ])

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasksState} />
    </div>
  );
}

export default App;
