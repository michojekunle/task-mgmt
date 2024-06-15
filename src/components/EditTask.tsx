import React, { useState, useEffect } from 'react';
import { Task } from '../types';

interface EditTaskProps {
  task: Task;
  onUpdateTask: (updatedTask: Task) => void;
  onCancel: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onUpdateTask, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate);

  useEffect(() => {
    setTitle(task.title);
    setDueDate(task.dueDate);
  }, [task]);

  const handleUpdateTask = () => {
    const updatedTask: Task = {
      ...task,
      title,
      dueDate,
    };
    onUpdateTask(updatedTask);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleUpdateTask}>Update Task</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTask;
