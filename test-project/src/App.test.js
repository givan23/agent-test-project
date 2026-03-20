import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders four social cards", () => {
  render(<App />);

  expect(screen.getAllByRole("button", { name: /read more/i })).toHaveLength(4);
  expect(screen.getByText("TWITTER")).toBeInTheDocument();
  expect(screen.getByText("FACEBOOK")).toBeInTheDocument();
  expect(screen.getByText("INSTAGRAM")).toBeInTheDocument();
  expect(screen.getByText("TELEGRAM")).toBeInTheDocument();
});
