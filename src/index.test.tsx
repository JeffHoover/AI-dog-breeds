/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

describe("index.tsx", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  test("renders App without crashing", () => {
    const root = ReactDOM.createRoot(document.getElementById("root")!);
    expect(() => root.render(<App />)).not.toThrow();
  });
});
