import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import AddTask from '../src/components/AddTask';

describe('AddTask', () => {
  test('renders AddTask component and adds a task', () => {
    const handleAddTask = vi.fn();
    render(<AddTask onAddTask={handleAddTask} />);

    const titleInput = screen.getByPlaceholderText('Task Title');
    const dueDateInput = screen.getByLabelText(/due date/i);
    const addButton = screen.getByText(/add task/i);

    fireEvent.change(titleInput, { target: { value: 'Test Task' } });
    fireEvent.change(dueDateInput, { target: { value: '2024-12-31' } });
    fireEvent.click(addButton);

    expect(handleAddTask).toHaveBeenCalledWith({
      id: expect.any(Number),
      title: 'Test Task',
      dueDate: '2024-12-31',
      completed: false,
    });
  });
});
