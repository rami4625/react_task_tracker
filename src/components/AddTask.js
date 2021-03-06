import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if(!name) {
      alert('Please Add A Task');
      return
    }

    onAdd({name, day, reminder});

    setName('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={name} onChange={e => setName(e.target.value)}/>
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input type="datetime-local" value={day === '' ? "2021-01-01T00:00" : day} onChange={e => setDay(e.target.value)}/>
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="checkReminder">Set Reminder</label>
        <input id="checkReminder" type="checkbox" checked={reminder} value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
