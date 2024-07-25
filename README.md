This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instructions

First, copy `.env.example` and rename it to `.env`. Set the `MOCK_API_KEY` to point to your mockapi.io endpoint.

Then, install the dependencies :
```bash
pnpm i
```

Lastly, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Performance
I used Next.js 14 for this test. I load the data for the portfolio and admin panel in a server component. This uses a rendering technique called ISR (Incremental Static Regeneration). This means the portfolio and admin panel are initially rendered as static pages during build time. When a change is made to the data I call `revalidatePath` on both `/` and `/admin`, causing both page caches to be invalidated. The admin panel updates immediately and shows the new data. The portfolio page rerenders the first time it gets visited. After that both pages are static again, which makes them as performant as can be.

The about page is rendered using SSG (Static Site Generation) and gets generated at build time. Again, being as performant as can be.

## Testing
I ran into a couple of issues with testing. I use `useFormState` and `useFormStatus` to control my forms. It appears jest is running a different version of react than Next.js. One where `useFormState` and `useFormStatus` are not available ([more information](https://stackoverflow.com/a/78736908)). So I ran out of time for writing proper tests for the Admin page.

I ran into another issue trying to test my server actions. `revalidatePath` throws an error and I couldn't get it to mock properly.

## Styling
I was hoping to use Emotion for styling, but it is currently [not supported](https://nextjs.org/docs/app/building-your-application/styling/css-in-js) in app router. I decided to use Styled Components instead.