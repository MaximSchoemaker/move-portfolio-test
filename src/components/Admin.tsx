"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createPortfolioItem, updatePortfolioItem } from "@/server/actions";

import type { PortfolioItem } from "@/server/api";
import type { CreatePortfolioItemResponse } from "@/server/actions";
import { useRef } from "react";

type AdminProps = {
   items: PortfolioItem[];
}

export default function Admin({ items }: AdminProps) {
   return (
      <main>
         {items.map(item => (
            <UpdatePortfolioItem key={item.id} item={item} />
         ))}
         <CreatePortfolioItem />
      </main>
   );
}

function CreatePortfolioItem() {
   const ref = useRef<HTMLFormElement>(null);
   const submitForm = async (prevState: CreatePortfolioItemResponse, formData: FormData) => {
      const res = await createPortfolioItem(prevState, formData);
      ref.current?.reset();
      return res;
   }

   const [state, dispatch] = useFormState(submitForm, { success: false, message: "" });

   return (
      <>
         <form action={dispatch} ref={ref}>
            <input type="text" name="title" />
            <input type="text" name="description" />
            <Submit text="Create" pendingMessage="Creating..." responseMessage={state.message} />
         </form>
      </>
   )
}

type UpdatePortfolioItemProps = {
   item: PortfolioItem;
}

function UpdatePortfolioItem({ item }: UpdatePortfolioItemProps) {
   const [state, dispatch] = useFormState(updatePortfolioItem, { success: false, message: "" });

   return (
      <>
         <form action={dispatch}>
            <input type="text" name="id" defaultValue={item.id} hidden />
            <input type="text" name="title" defaultValue={item.title} />
            <input type="text" name="description" defaultValue={item.description} />
            <input type="text" name="image" defaultValue={item.image} hidden />
            <Submit text="Update" pendingMessage="Updating..." responseMessage={state.message} />
         </form>
      </>
   )
}

type SubmitProps = {
   text: string,
   pendingMessage: string,
   responseMessage: string
}

function Submit({ text, pendingMessage, responseMessage }: SubmitProps) {
   const status = useFormStatus();
   const message = status.pending ? pendingMessage : responseMessage
   return (
      <>
         <button disabled={status.pending}>{text}</button>
         <p>{message}</p>
      </>
   );
}