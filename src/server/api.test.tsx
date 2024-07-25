// import "@testing-library/jest-dom";
import { getPortfolioItems } from "./api";

describe("getPortfolioItems", () => {
   it("returns a portfolio item", async () => {
      global.fetch = jest.fn(() =>
         Promise.resolve({
            ok: true,
            json: () => Promise.resolve([{ id: "0", title: "test title", description: "test body", url: "https://test.com", image: "/image.jpg" }]),
         }),
      ) as jest.Mock;

      const items = await getPortfolioItems();
      expect(items).toEqual([{ id: "0", title: "test title", description: "test body", url: "https://test.com", image: "/image.jpg" }]);
   });

   it("throws an error when ok is false", async () => {
      global.fetch = jest.fn(() =>
         Promise.resolve({
            ok: false,
            statusText: "failed to load items",
         }),
      ) as jest.Mock;

      try {
         await getPortfolioItems();
      } catch (error) {
         expect(error).toEqual(new Error("Failed to load items: failed to load items"));
      }
   });
});
