# Task Management Application

## Overview
The Task Management Application is a simple web app designed to help users manage their daily tasks. Users can add, edit, and delete tasks, as well as mark them as complete. The application persists tasks between sessions using local storage.

## Features
- Add new tasks with a title and due date.
- Edit existing tasks to update details.
- Delete tasks that are no longer needed.
- Mark tasks as complete and view a list of completed tasks.

## Technologies Used
- React
- TypeScript
- Vite
- Vitest (for testing)
- React Testing Library (for testing)

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/michojekunle/task-mgmt.git
   cd task-mgmt
2. Install dependencies:
     ```
         npm install
      ```

### Running the Application
To start the development server:
  ```npm run dev```
Open your browser and navigate to http://localhost:5173 to see the application in action.


### Running Tests
To run the tests using Vitest:
   ```
      npm test
   ```

### Testing
Tests are written using Vitest and React Testing Library.

- Example Test (AddTask.test.tsx)

      ```
      import React from 'react';
      import { render, screen, fireEvent } from '@testing-library/react';
      import { describe, it, expect, vi } from 'vitest';
      import AddTask from './AddTask';
      
      describe('AddTask', () => {
        it('renders AddTask component and adds a task', () => {
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
      ```
Contact
For any inquiries, please contact [michojekunle1@gmail.com]
