import React from "react";
import { render, screen } from "@testing-library/react";
import TopicPage from "./TopicPage";

describe("TopicPage Component", () => {
  const topics = [
    { id: "1", title: "Labrador Retriever" },
    { id: "2", title: "German Shepherd" },
  ];

  test("renders list of topics", () => {
    render(<TopicPage topics={topics} />);
    expect(screen.getByText("Labrador Retriever")).toBeInTheDocument();
    expect(screen.getByText("German Shepherd")).toBeInTheDocument();
  });

  test("renders no topics message when empty", () => {
    render(<TopicPage topics={[]} />);
    expect(screen.getByText(/no topics found/i)).toBeInTheDocument();
  });
});
