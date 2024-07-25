import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";

describe("Portfolio", () => {
   it("renders it's items", () => {
      render(<Portfolio items={[{
         id: "0",
         title: "test title",
         description: "test body",
         url: "https://test.com",
         image: "/image.jpg"
      },
      {
         id: "1",
         title: "test title 2",
         description: "test body 2",
         url: "https://test2.com",
         image: "/image2.jpg"
      }
      ]} />);

      expect(screen.getByText("test title")).toBeInTheDocument();
      expect(screen.getByText("test body")).toBeInTheDocument();

      expect(screen.getByText("test title 2")).toBeInTheDocument();
      expect(screen.getByText("test body 2")).toBeInTheDocument();

      const links = screen.getAllByRole('link', { name: "→" });
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveAttribute('href', 'https://test.com');
      expect(links[1]).toHaveAttribute('href', 'https://test2.com');

      const images = screen.getAllByRole("img")
      expect(images).toHaveLength(2);
      expect(images[0]).toHaveAttribute("src", "/image.jpg");
      expect(images[1]).toHaveAttribute("src", "/image2.jpg");
   });
});
