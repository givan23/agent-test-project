import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders six social cards with header and footer", () => {
  render(<App />);

  expect(screen.getAllByRole("button", { name: /read more/i })).toHaveLength(6);
  expect(screen.getByText("TWITTER")).toBeInTheDocument();
  expect(screen.getByText("FACEBOOK")).toBeInTheDocument();
  expect(screen.getByText("INSTAGRAM")).toBeInTheDocument();
  expect(screen.getByText("TELEGRAM")).toBeInTheDocument();
  expect(screen.getByText("WHATSAPP")).toBeInTheDocument();
  expect(screen.getByText("LINKEDIN")).toBeInTheDocument();
  expect(screen.getByText("IT")).toBeInTheDocument();
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
