"use client"

import { styled } from "styled-components"

type ItemContainerProps = {
   title: string,
   index: number,
   children: React.ReactNode
}

export default function ItemContainer({ title, index, children }: ItemContainerProps) {
   return (
      <StyledListItem $index={index}>
         <StyledListItemHeader>
            <StyledStar>✧</StyledStar>
            <StyledTitle>{title}</StyledTitle>
         </StyledListItemHeader>
         <StyledListItemBody>
            {children}
         </StyledListItemBody>
      </StyledListItem>
   );
}

const StyledListItem = styled.li<{ $index: number }>`
   margin-top: 2rem;
   max-width: 500px;
   &:nth-child(even) {
      margin-top: 7rem;
   }

   animation: appear 0.5s ease-out;
   animation-delay: ${({ $index }) => $index * 0.1}s;
   animation-fill-mode: backwards;
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