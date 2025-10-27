# NextJS Frontend Features

- When looking at these demos, **check the NextJS version**
- SSR stands for "Server Side Rendering"
- `useEffect` and `useState` are typically reserved for *client-side* rendering; they are not typically used for *server-side rendering*.
- Always use SSR when handling sensitive information!
- Observe what happens with `console.log()` on SSR code! 👀
- The down side of SSR is that it means more network traffic to keep your page up-to-date

> *When exporting a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps`. This is useful if you want to fetch data that changes often, and have the page update to show the most current data.*
> ([source](https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props))

