"use client"

import { styled } from "styled-components"
import type { PortfolioItem } from "@/server/api"
import ItemContainer from "../ItemContainer";
import { StyledList } from "../SharedStyledComponents";

type PortfolioProps = {
   items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
   return (
      <StyledList>
         {items.map((item, index) => (
            <ItemContainer key={item.id} title={item.title} index={index} topRightSlot={
               <StyledArrow href={item.url} target="_blank" rel="noreferrer">→</StyledArrow>
            }>
               <p>{item.description}</p>
               {item.image && <StyledImage src={item.image} alt={item.title} />}
            </ItemContainer>
         ))}
      </StyledList>
   );
}

const StyledArrow = styled.a`
   font-size: 2rem;
   font-weight: bold;

   &:hover {
      color: var(--color-accent2);
   }
`

const StyledImage = styled.img`
   width: 100%;
   aspect-ratio: 16 / 9;
   object-fit: cover;
   display: block;
   border: 1px solid var(--color-text);
`


