"use client";

import { updatePortfolioItem } from "@/server/actions";
import type { PortfolioItem } from "@/server/api";
import { useFormState, useFormStatus } from "react-dom";

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
   const [state, dispatch] = useFormState(updatePortfolioItem, item);

   return (
      <form action={dispatch}>
         <input type="text" name="id" defaultValue={state.id} hidden />
         <input type="text" name="title" defaultValue={state.title} />
         <input type="text" name="description" defaultValue={state.description} />
         <input type="text" name="image" defaultValue={state.image} hidden />
         <Submit />
      </form>
   )
}

function Submit() {
   const status = useFormStatus();

   return (
      <button disabled={status.pending}>
         {status.pending ? "Submitting..." : "Submit"}
      </button>
   );
}