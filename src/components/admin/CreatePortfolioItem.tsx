"use client";

import { useFormState } from "react-dom";
import { useRef } from "react";

import { createPortfolioItem } from "@/server/actions";
import type { CreatePortfolioItemResponse } from "@/server/actions";
import { StyledForm, StyledInput, StyledTextarea } from "../SharedStyledComponents";
import SubmitButton from "./SubmitButton";

export default function CreatePortfolioItem() {
   const ref = useRef<HTMLFormElement>(null);
   const submitForm = async (prevState: CreatePortfolioItemResponse, formData: FormData) => {
      const res = await createPortfolioItem(prevState, formData);
      ref.current?.reset();
      return res;
   }

   const [state, dispatch] = useFormState(submitForm, { success: false, message: "" });

   return (
      <>
         <StyledForm action={dispatch} ref={ref}>
            <StyledInput type="text" name="title" placeholder="title" />
            <StyledInput type="text" name="url" placeholder="url" />
            <StyledTextarea name="description" placeholder="description" />
            <SubmitButton text="Create" pendingMessage="Creating..." responseMessage={state.message} />
         </StyledForm>
      </>
   )
}