"use server"

import { revalidatePath } from 'next/cache';

export type CreatePortfolioItemResponse = {
   success: boolean,
   message: string
}

export async function createPortfolioItem(prevState: CreatePortfolioItemResponse, formData: FormData) {
   try {
      const title: string | null = formData.get('title') as string;
      const description: string | null = formData.get('description') as string;
      const image: string | null = formData.get('image') as string;

      const data = {
         title,
         description,
         image
      }

      const response = await fetch(`https://${process.env.MOCK_API_KEY}.mockapi.io/api/v1/PortfolioItem/`, {
         method: "POST",
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`Failed to create portfolio item: ${response.statusText}`);

      revalidatePath('/admin');
      revalidatePath('/');

      return { success: true, message: "Successfuly created portfolio item!" }

   } catch (error) {
      console.error(error);
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      return { success: false, message }
   }
}

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

      if (!response.ok) throw new Error(`Failed to updated portfolio item: ${response.statusText}`);

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

export type DeletePortfolioItemResponse = {
   success: boolean,
   message: string
}

export async function deletePortfolioItem(id: string) {
   try {
      const response = await fetch(`https://${process.env.MOCK_API_KEY}.mockapi.io/api/v1/PortfolioItem/${id}`, {
         method: "DELETE",
         headers: { 'content-type': 'application/json' },
      });

      if (!response.ok) throw new Error(`Failed to delete portfolio item: ${response.statusText}`);

      revalidatePath('/admin');
      revalidatePath('/');

      return { success: true, message: "Successfuly deleted portfolio item!" }

   } catch (error) {
      console.error(error);
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      return { success: false, message }
   }
}