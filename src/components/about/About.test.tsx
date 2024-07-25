import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
   it("renders", () => {
      render(<About />);

      expect(screen.getByText("Hello!")).toBeInTheDocument();
      expect(screen.getByText("👋")).toBeInTheDocument();
      expect(screen.getByText(
         "I'm an Amsterdam based web developer with a passion for TypeScript, web design and frontend architecture. Throughout my career, I've developed React applications in all shapes and sizes. Working in fast moving start-up settings allowed me to take on a large amount of ownership, developing features end-to-end. It let me focus on frontend architecture, designing reusable components and familiarizing myself with cutting edge technology. Whereas my experiences in a larger team taught me proper industry standards. Including scrum, CI/CD, testing and code cleanliness."
      )).toBeInTheDocument();
   });
});
