import type { PortfolioItem } from "@/server/api"

type PortfolioProps = {
   items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
   return (
      <>
         <h1>Portfolio</h1>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <img src={item.image} alt={item.title} />
               </li>
            ))}
         </ul>
      </>
   );
}