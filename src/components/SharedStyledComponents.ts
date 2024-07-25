"use client"

import { styled } from "styled-components"

export const StyledList = styled.ul`
   padding: 2.7rem;
   padding-top: 0;
   display: grid;
   grid-template-columns: 1fr 1fr;
   flex-direction: column;
   gap: 0 3rem;

   box-sizing: border-box;
   width: 100%;
   max-width: var(--max-width);
   margin: 0 auto;
`

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

export const StyledInput = styled.input`
   font-family: inherit;
   font-size: 1rem;
`

export const StyledTextarea = styled.textarea`
   min-height: 100px;
   font-family: inherit;
   font-size: 1rem;
`
