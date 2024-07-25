
import { styled } from "styled-components"

export const StyledList = styled.ul`
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