"use server"

import { revalidatePath } from 'next/cache';

export type UpdatePortfolioItemResponse = {
   success: boolean,
   message: string
}

export async function updatePortfolioItem(prevState: UpdatePortfolioItemResponse, formData: FormData) {
   try {
      const id: string | null = formData.get('id') as string;
      const title: string | null = formData.get('title') as string;
      const description: string | null = formData.get('description') as string;
      const image: string | null = formData.get('image') as string;

      const data = {
         id,
         title,
         description,
         image
      }

      const response = await fetch(`https://${process.env.MOCK_API_KEY}.mockapi.io/api/v1/PortfolioItem/${id}`, {
         method: "PATCH",
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`Failed to submit form: ${response.statusText}`);

      revalidatePath('/admin');
      revalidatePath('/');

      return { success: true, message: "Successfuly updated portfolio item!" }

   } catch (error) {
      console.error(error);
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      return { success: false, message }
   }
}