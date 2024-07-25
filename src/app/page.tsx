import Portfolio from "@/components/portfolio/Portfolio";
import { getPortfolioItems } from "@/server/api";

export default async function Home() {

  const items = await getPortfolioItems();

  return (
    <main>
      <Portfolio items={items} />
    </main>
  );
}
