import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Dog Breeds App/i)).toBeInTheDocument();
  });

  test("renders a link to privacy policy", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: /privacy policy/i }),
    ).toBeInTheDocument();
  });
});
