import { updatePortfolioItem } from "./actions";

jest.mock('next/cache', () => ({
   revalidatePath: jest.fn()
}))

// I could not get revalidatePath mock to work. Unsure why this is the case, but it breaks my test.

describe("updatePortfolioItem", () => {
   it("updates portfolio item successfully", async () => {
      global.fetch = jest.fn(() =>
         Promise.resolve({
            ok: true,
         }),
      ) as jest.Mock;

      const response = await updatePortfolioItem({ success: true, message: "" }, new FormData());
      expect(response).toEqual({ success: true, message: "Successfuly updated portfolio item!" });
   });
});
