import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.title} (Due: {task.dueDate})
      </span>
      <button onClick={onEdit}>Edit</button>
      <button className="delete" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
