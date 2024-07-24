import Admin from "@/components/Admin";
import { getPortfolioItems } from "@/server/api";

export default async function Page() {

  const items = await getPortfolioItems();

  return (
    <main>
      <Admin items={items} />
    </main>
  );
}
