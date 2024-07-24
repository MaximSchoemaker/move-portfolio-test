"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updatePortfolioItem } from "@/server/actions";

import type { UpdatePortfolioItemResponse } from "@/server/actions";
import type { PortfolioItem } from "@/server/api";

type AdminProps = {
   items: PortfolioItem[];
}

export default function Admin({ items }: AdminProps) {
   return (
      <main>
         {items.map(item => (
            <AdminItem key={item.id} item={item} />
         ))}
      </main>
   );
}

type AdminItemProps = {
   item: PortfolioItem;
}

function AdminItem({ item }: AdminItemProps) {
   const [state, dispatch] = useFormState(updatePortfolioItem, { success: false, message: "" });

   return (
      <>
         <form action={dispatch}>
            <input type="text" name="id" defaultValue={item.id} hidden />
            <input type="text" name="title" defaultValue={item.title} />
            <input type="text" name="description" defaultValue={item.description} />
            <input type="text" name="image" defaultValue={item.image} hidden />
            <Submit state={state} />
         </form>
      </>
   )
}

type SubmitProps = {
   state: UpdatePortfolioItemResponse
}

function Submit({ state }: SubmitProps) {
   const status = useFormStatus();
   const message = status.pending ? "Submitting..." : state.message
   return (
      <>
         <button disabled={status.pending}>Submit</button>
         <p>{message}</p>
      </>
   );
}