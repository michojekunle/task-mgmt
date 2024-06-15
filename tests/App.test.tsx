import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import App from "../src/App";

describe("App", () => {
  test("renders App component and performs CRUD operations", () => {
    render(<App />);

    // Add a task
    const titleInput = screen.getByPlaceholderText("Task Title");
    // const dueDateInput = screen.getByPlaceholderText(/due date/i);
    const addButton = screen.getByText(/add task/i);

    fireEvent.change(titleInput, { target: { value: "New Task" } });
    // fireEvent.change(dueDateInput, { target: { value: "2024-12-31" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/new task/i)).toBeInTheDocument();

    // Edit the task
    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    const updateButton = screen.getByText(/update task/i);
    fireEvent.change(titleInput, { target: { value: "Updated Task" } });
    fireEvent.click(updateButton);

    expect(screen.getByText(/updated task/i)).toBeInTheDocument();

    // Complete the task
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Delete the task
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/updated task/i)).not.toBeInTheDocument();
  });
});
