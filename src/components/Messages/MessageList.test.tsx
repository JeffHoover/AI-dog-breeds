import React from "react";
import { render, screen } from "@testing-library/react";
import MessageList from "./MessageList";

describe("MessageList Component", () => {
  const messages = [
    { id: "1", text: "First message" },
    { id: "2", text: "Second message" },
  ];

  test("renders list of messages", () => {
    render(<MessageList messages={messages} />);
    expect(screen.getByText("First message")).toBeInTheDocument();
    expect(screen.getByText("Second message")).toBeInTheDocument();
  });

  test("renders no messages message when empty", () => {
    render(<MessageList messages={[]} />);
    expect(screen.getByText(/no messages/i)).toBeInTheDocument();
  });
});
