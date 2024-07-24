"use client"

import { styled } from "styled-components"
import type { PortfolioItem } from "@/server/api"

type PortfolioProps = {
   items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
   return (
      <StyledList>
         {items.map(item => (
            <StyledListItem key={item.id}>
               <StyledListItemHeader>
                  <StyledStar>✦</StyledStar>
                  <StyledTitle>{item.title}</StyledTitle>
               </StyledListItemHeader>
               <StyledListItemBody>
                  {/* <StyledText>{item.description}</StyledText> */}
                  <StyledText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</StyledText>
                  {item.image && <StyledImage src={item.image} alt={item.title} />}
               </StyledListItemBody>
            </StyledListItem>
         ))}
      </StyledList>
   );
}

const StyledList = styled.ul`
   padding: 2.7rem;
   padding-top: 0;
   list-style-type: none;
   display: grid;
   grid-template-columns: 1fr 1fr;
   flex-direction: column;
   gap: 0 3rem;

   box-sizing: border-box;
   width: 100%;
   max-width: var(--max-width);
   margin: 0 auto;
`

const StyledListItem = styled.li`
   margin-top: 2rem;
   &:nth-child(even) {
      /* align-self: flex-end; */
      margin-top: 7rem;
   }
   max-width: 500px;
   
`

const StyledListItemHeader = styled.div`
   gap: 0.5rem;
   display: flex;
   align-items: center;
`

const StyledStar = styled.span`
   font-size: 1rem;
`
const StyledTitle = styled.h2`
   font-size: 2rem;
   margin: 0;
`

const StyledListItemBody = styled.div`
   border: 1px solid var(--color-text);
   padding: 1rem;
   height: fit-content;
`

const StyledText = styled.p`
`

const StyledImage = styled.img`
   width: 100%;
   aspect-ratio: 16 / 9;
   object-fit: cover;
   display: block;
   border: 1px solid var(--color-text);
`


