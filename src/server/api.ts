
export type PortfolioItem = {
   id: string;
   title: string;
   description: string;
   image: string;
};

export async function getPortfolioItems() {
   const response = await fetch("https://66a0e0407053166bcabd3601.mockapi.io/api/v1/PortfolioItem", {
      method: "GET",
      headers: { 'content-type': 'application/json' },
   });

   if (!response.ok) throw new Error(`Failed to load items: ${response.statusText}`);

   return await response.json() as PortfolioItem[];
}