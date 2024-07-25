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
            <ItemContainer key={item.id} title={item.title} index={index}>
               <StyledText>{item.description}</StyledText>
               {item.image && <StyledImage src={item.image} alt={item.title} />}
            </ItemContainer>
         ))}
      </StyledList>
   );
}

const StyledText = styled.p`
`

const StyledImage = styled.img`
   width: 100%;
   aspect-ratio: 16 / 9;
   object-fit: cover;
   display: block;
   border: 1px solid var(--color-text);
`


