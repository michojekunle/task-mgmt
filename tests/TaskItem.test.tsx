import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TaskItem from '../src/components/TaskItem';
import { Task } from '../src/types';

describe('TaskItem', () => {
  const task: Task = {
    id: 1,
    title: 'Test Task',
    dueDate: '2024-12-31',
    completed: false,
  };

  test('renders TaskItem component and toggles completion', () => {
    const handleEdit = vi.fn();
    const handleDelete = vi.fn();
    const handleToggleComplete = vi.fn();
    render(
      <TaskItem
        task={task}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    const editButton = screen.getByText(/edit/i);
    const deleteButton = screen.getByText(/delete/i);

    fireEvent.click(checkbox);
    expect(handleToggleComplete).toHaveBeenCalledWith();

    fireEvent.click(editButton);
    expect(handleEdit).toHaveBeenCalledWith();

    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith();
  });
});
