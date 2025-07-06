import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage Component", () => {
  test("renders welcome message", () => {
    render(<HomePage />);
    expect(screen.getByText(/welcome to dog breeds app/i)).toBeInTheDocument();
  });
});
