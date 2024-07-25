
export type PortfolioItem = {
   id: string;
   title: string;
   description: string;
   image: string;
};

export async function getPortfolioItems() {
   const response = await fetch(`https://${process.env.MOCK_API_KEY}.mockapi.io/api/v1/PortfolioItem?orderBy=createdAt&order=desc`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
   });

   if (!response.ok) throw new Error(`Failed to load items: ${response.statusText}`);

   return await response.json() as PortfolioItem[];
}