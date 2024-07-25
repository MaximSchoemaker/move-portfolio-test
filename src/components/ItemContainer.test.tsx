import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ItemContainer from "./ItemContainer";

describe("ItemContainer", () => {
   it("renders an ItemContainer and it's props", () => {
      render(<ItemContainer title="test title" index={0} topRightSlot={
         <span>top right slot test</span>
      }>
         <div>Test Body</div>
      </ItemContainer>);

      expect(screen.getByText(/test body/i)).toBeInTheDocument();
      expect(screen.getByText(/test title/i)).toBeInTheDocument();
      expect(screen.getByText(/top right slot test/i)).toBeInTheDocument();
   });
});
