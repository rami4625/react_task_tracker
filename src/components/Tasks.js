import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map(item =>
        <Task
          key={item.id}
          task={item}
          onDelete={onDelete}
        />
      )}
    </>
  );
}

export default Tasks;
