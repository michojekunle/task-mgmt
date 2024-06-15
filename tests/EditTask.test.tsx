import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import EditTask from '../src/components/EditTask';
import { Task } from '../src/types';

describe('EditTask', () => {
  const task: Task = {
    id: 1,
    title: 'Test Task',
    dueDate: '2024-12-31',
    completed: false,
  };

  test('renders EditTask component and updates a task', () => {
    const handleUpdateTask = vi.fn();
    const handleCancel = vi.fn();
    render(<EditTask task={task} onUpdateTask={handleUpdateTask} onCancel={handleCancel} />);

    const titleInput = screen.getByDisplayValue('Test Task');
    const dueDateInput = screen.getByDisplayValue('2024-12-31');
    const updateButton = screen.getByText(/update task/i);
    const cancelButton = screen.getByText(/cancel/i);

    fireEvent.change(titleInput, { target: { value: 'Updated Task' } });
    fireEvent.change(dueDateInput, { target: { value: '2024-11-30' } });
    fireEvent.click(updateButton);

    expect(handleUpdateTask).toHaveBeenCalledWith({
      id: 1,
      title: 'Updated Task',
      dueDate: '2024-11-30',
      completed: false,
    });

    fireEvent.click(cancelButton);
    expect(handleCancel).toHaveBeenCalled();
  });
});
