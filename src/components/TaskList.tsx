import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onToggleComplete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => onEditTask(task)}
          onDelete={() => onDeleteTask(task.id)}
          onToggleComplete={() => onToggleComplete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
