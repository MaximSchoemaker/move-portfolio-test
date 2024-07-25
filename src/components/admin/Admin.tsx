
import type { PortfolioItem } from "@/server/api";
import { StyledList } from "../SharedStyledComponents";
import ItemContainer from "../ItemContainer";
import CreatePortfolioItem from "./CreatePortfolioItem";
import UpdatePortfolioItem from "./UpdatePortfolioItem";
import DeletePortfolioItem from "./DeletePortfolioItem";

type AdminProps = {
   items: PortfolioItem[];
}

export default function Admin({ items }: AdminProps) {
   return (
      <StyledList>
         <ItemContainer title={"Create New Item..."} index={0}>
            <CreatePortfolioItem />
         </ItemContainer>
         {items.map((item, index) => (
            <ItemContainer title={item.title} key={item.id} index={index + 1} topRightSlot={
               <DeletePortfolioItem id={item.id} />}
            >
               <UpdatePortfolioItem item={item} />
            </ItemContainer>
         ))}
      </StyledList>
   );
}