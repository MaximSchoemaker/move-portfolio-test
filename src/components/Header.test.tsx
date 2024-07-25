import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
   it("renders", () => {
      render(<Header />);

      expect(screen.getByText("Maxim Schoemaker")).toBeInTheDocument();

      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(3);
      expect(links[0]).toHaveTextContent("Portfolio");
      expect(links[1]).toHaveTextContent("About");
      expect(links[2]).toHaveTextContent("Admin");
   });
});
