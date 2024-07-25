"use client"

import { useFormStatus } from "react-dom";
import { styled } from "styled-components"

type SubmitButton = {
   text: string,
   pendingMessage: string,
   responseMessage: string
}

export default function SubmitButton({ text, pendingMessage, responseMessage }: SubmitButton) {
   const status = useFormStatus();
   const message = status.pending ? pendingMessage : responseMessage
   return (
      <div>
         <button disabled={status.pending}>{text}</button>
         {message && <StyledMessage>{message}</StyledMessage>}
      </div>
   );
}

const StyledMessage = styled.span`
   margin-left: 0.5rem;
`