import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTopicForm from "./NewTopicForm";

describe("NewTopicForm Component", () => {
  test("renders input and submit button", () => {
    render(<NewTopicForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/topic title/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create topic/i }),
    ).toBeInTheDocument();
  });

  test("calls onSubmit with input value on form submit", () => {
    const onSubmit = jest.fn();
    render(<NewTopicForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText(/topic title/i);
    const button = screen.getByRole("button", { name: /create topic/i });

    fireEvent.change(input, { target: { value: "New Dog Breed" } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith("New Dog Breed");
  });

  test("clears input after submit", () => {
    const onSubmit = jest.fn();
    render(<NewTopicForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText(/topic title/i);
    const button = screen.getByRole("button", { name: /create topic/i });

    fireEvent.change(input, { target: { value: "New Dog Breed" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
