import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map(item =>
        <h3 key={item.id}>{item.text}</h3>
        // <Task key={item.id} text={item.text} />
      )}
    </>
  );
}

export default Tasks;
