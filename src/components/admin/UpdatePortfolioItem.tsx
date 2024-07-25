"use client"

import { useFormState } from "react-dom";

import { updatePortfolioItem } from "@/server/actions";
import type { PortfolioItem } from "@/server/api";
import { StyledForm, StyledInput, StyledTextarea } from "../SharedStyledComponents";
import SubmitButton from "./SubmitButton";

type UpdatePortfolioItemProps = {
   item: PortfolioItem;
}

export default function UpdatePortfolioItem({ item }: UpdatePortfolioItemProps) {
   const [state, dispatch] = useFormState(updatePortfolioItem, { success: false, message: "" });

   return (
      <>
         <StyledForm action={dispatch}>
            <input type="text" name="id" defaultValue={item.id} hidden />
            <StyledInput type="text" name="title" defaultValue={item.title} />
            <StyledInput type="text" name="url" defaultValue={item.url} />
            <StyledTextarea name="description" defaultValue={item.description} />
            <SubmitButton text="Update" pendingMessage="Updating..." responseMessage={state.message} />
         </StyledForm>
      </>
   )
}

