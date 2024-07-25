"use client"

import { deletePortfolioItem } from "@/server/actions";

type DeletePortfolioItemProps = {
   id: string;
}

export default function DeletePortfolioItem({ id }: DeletePortfolioItemProps) {

   const onClick = async () => {
      const answer = confirm(`Are you sure you want to delete this item?`);
      if (answer) {
         const response = await deletePortfolioItem(id);
         alert(response.message);
      }
   }

   return (
      <button onClick={onClick}>Delete</button>
   )
}