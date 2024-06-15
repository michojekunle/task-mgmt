import React, { useState } from 'react';
import { Task } from '../types';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title,
      dueDate,
      completed: false,
    };
    onAddTask(newTask);
    setTitle('');
    setDueDate('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
