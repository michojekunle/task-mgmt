import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TaskList from '../src/components/TaskList';
import { Task } from '../src/types';

describe('TaskList', () => {
  const tasks: Task[] = [
    { id: 1, title: 'Test Task 1', dueDate: '2024-12-31', completed: false },
    { id: 2, title: 'Test Task 2', dueDate: '2024-11-30', completed: true },
  ];

  test('renders TaskList component and handles task actions', () => {
    const handleEditTask = vi.fn();
    const handleDeleteTask = vi.fn();
    const handleToggleComplete = vi.fn();
    render(
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    );

    const editButtons = screen.getAllByText(/edit/i);
    const deleteButtons = screen.getAllByText(/delete/i);
    const checkboxes = screen.getAllByRole('checkbox');

    fireEvent.click(editButtons[0]);
    expect(handleEditTask).toHaveBeenCalledWith(tasks[0]);

    fireEvent.click(deleteButtons[1]);
    expect(handleDeleteTask).toHaveBeenCalledWith(tasks[1].id);

    fireEvent.click(checkboxes[0]);
    expect(handleToggleComplete).toHaveBeenCalledWith(tasks[0].id);
  });
});
