import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders twitter card", () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.getElementById("twitter-card")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /read more/i }),
  ).toBeInTheDocument();
});
