"use client"

import { styled } from "styled-components"
import ItemContainer from "../ItemContainer";

export default function About() {
   return (
      <StyledAbout>
         <ItemContainer title="Hello!" index={0} topRightSlot={<StyledHand>👋</StyledHand>}>
            <StyledAboutContent>
               <StyledImage src="/about.jpg" alt="picture of Maxim"></StyledImage>
               <p>
                  I&apos;m an Amsterdam based web developer with a passion for TypeScript, web design and frontend architecture. Throughout my career, I&apos;ve developed React applications in all shapes and sizes. Working in fast moving start-up settings allowed me to take on a large amount of ownership, developing features end-to-end. It let me focus on frontend architecture, designing reusable components and familiarizing myself with cutting edge technology. Whereas my experiences in a larger team taught me proper industry standards. Including scrum, CI/CD, testing and code cleanliness.
               </p>
            </StyledAboutContent>
         </ItemContainer>
      </StyledAbout>
   );
}

const StyledAbout = styled.div`
   max-width: var(--max-width);
   margin: 0 auto;
   padding: 0 2.7rem;
   box-sizing: border-box;
`

const StyledHand = styled.span`
   font-size: 1.5rem;
`

const StyledAboutContent = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
`

const StyledImage = styled.img`
   width: 175px;
   height: 175px;
   border-radius: 50%;
   border: 1px solid var(--color-text);
`