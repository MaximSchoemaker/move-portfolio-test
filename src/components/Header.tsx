"use client"

import { styled } from "styled-components"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

   const pathname = usePathname()

   return (
      <header>
         <StyledTitleContainer>
            <StyledStar>✦</StyledStar>
            <StyledTitle>Maxim Schoemaker</StyledTitle>
         </StyledTitleContainer>
         <StyledHr />
         <StyledNav>
            <StyledLink $active={pathname === '/'}>
               <Link href="/">Portfolio</Link>
            </StyledLink>
            <StyledLink $active={pathname === '/about'}>
               <Link href="/about">About</Link>
            </StyledLink>
            <StyledLink $active={pathname === '/admin'}>
               <Link href="/admin">Admin</Link>
            </StyledLink>
         </StyledNav>
      </header>
   )
}


const StyledTitleContainer = styled.div`
   max-width: var(--max-width);
   margin: 0 auto;
   display: flex;
   align-items: center;
   padding: 1rem;
   box-sizing: border-box;
`

const StyledStar = styled.span`
   font-size: 2rem;
`

const StyledTitle = styled.h1`
   display: inline;
   margin: 0;
   font-size: 4rem;
   font-weight: bold;
   font-style: italic;
   width: fit-content;
   height: fit-content;
   text-shadow: -1px 0 var(--color-bg), 1px 0 var(--color-bg), 0 -1px var(--color-bg), 0 1px var(--color-bg), -1px -1px var(--color-bg), -1px 1px var(--color-bg), 1px -1px var(--color-bg), 1px 1px var(--color-bg);
   box-shadow: inset 0 -.2em var(--color-bg), inset 0 -.25em var(--color-text);
`

const StyledHr = styled.hr`
   border: 0;
   border-top: 1px solid var(--color-text);
`

const StyledNav = styled.nav`
   max-width: var(--max-width);
   margin: 0 auto;
   padding: 1rem;
   padding-left: 2.7rem;
   box-sizing: border-box;
   
   font-size: 1.5rem;
   display: flex;
   justify-content: flex-start;
   gap: 1rem;
`

const StyledLink = styled.span<{ $active: boolean; }>`
   text-decoration: ${props => props.$active ? 'underline' : 'none'};
   color: ${props => props.$active ? 'var(--color-accent)' : 'var(--color-text)'};
`