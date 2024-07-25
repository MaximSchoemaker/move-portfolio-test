import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Admin from "./Admin";

// ran into an issue with useFormState hook, it appears jest is running a different version of react than next.js. One where useFormState is not available.
// I tried mocking useFormState but I couldn't get it to work
// more information: https://stackoverflow.com/a/78736908

describe("Admin", () => {
   it("renders", () => {
      render(<Admin items={[{
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
   });
});
