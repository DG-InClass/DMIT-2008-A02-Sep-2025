# Takeaways - Routing and Pages

In order to better understand routing and pages, it's important to have a clear grasp of the ***Request* and *Response*** cycle of communication between the browser and the web server.

- The browser requests *resources* from the web server
- Each resource has an *endpoint* or URL
- That *endpoint*/URL is the ***route*** to the resource
- It might be for a whole page, for part of a page, or for an API call.
- **Multi-Page Apps**
  - Often share common **layout** components
  - Can share other components among separate pages
  - Requesting a new page means a **full page refresh**; these are more "expensive" in terms of the volume of data sent to the browser and the amount of time for the browser to load the data
  - Caching can help reduce response time
- **Single-Page Apps** (SPAs)
  - Only ***partial* page refreshes** are necessary
  - The URL is usually updated to reflect the ***route***, but the call is made as an AJAX request instead of a full page request.
- Routes can include **"slugs"**, which are *placeholders* for data (e.g.: the file `pages/agency/[id].js` where `[id]` is the "slug" that holds a value that can be programmatically obtained via the `useRouter()` hook)

    ```
    const router = useRouter()
    const { id } = router.query 
    ```

- Note that this demo is using **NextJS version *12.3.1***. When consulting [the docs](https://nextjs.org/docs) for things like [`useRouter()`](https://nextjs.org/docs/13/app/building-your-application/upgrading/app-router-migration), be aware of what version of notes you are looking at.
  - Another really good option is to leverage the trusty old `console.log()` to get object properties, et.al. If you want some "real-time" exploration, add in a line like `window.aboutRouter = useRouter()` and then play with `window.aboutRouter.` and see what comes up with the properties/functions for that object.

----

## More Readings

- [SSR in Next.js 14: What’s New in App Routing Compared to Page Routing](https://dev.to/asim_khan_cbe65e41bcbbc65/understanding-nextjs-page-routing-vs-app-routing-and-ssr-changes-in-nextjs-14-2cge)
- [Mastering Next.js Routing: A Modern Guide for 2025](https://medium.com/@differofeveryone/mastering-next-js-routing-a-modern-guide-for-2025-138c1e65b505)
- [Next.js Routing](https://www.geeksforgeeks.org/reactjs/next-js-routing/)

## Next.js Routing: Key Changes and Updates

> *A Bing-AI Response to "NextJS What has changed in routing"*

![](./img/copilot-search.png)

Next.js has introduced significant updates to routing, especially with the evolution from the **Page Router** to the **App Router** in versions 13 and 14. Here's a concise breakdown of the changes:

- Introduction of the App Router

  - The App Router was introduced in Next.js 13 and refined in version 14.
  - It provides a more flexible and modern approach to routing compared to the traditional Page Router.
  - Key features:
    - File-based routing is still the foundation, but now it's organized under the app/ directory instead of pages/.
    - Nested layouts: You can define layouts at different levels of your app, enabling reusable UI structures.
    - Server Components: By default, components in the app/ directory are server-rendered, improving performance and reducing client-side JavaScript.
- Dynamic and Nested Routing Enhancements
  - Dynamic routes (e.g., [id].js) are still supported but are now more powerful with the App Router.
  - Nested routes are easier to manage, thanks to the ability to define layouts and loading/error states for specific route segments.
- Simplified Data Fetching
  - The App Router integrates React Server Components and data fetching directly into the routing system.
  - You can use fetch() or other data-fetching methods directly in server components, eliminating the need for APIs like getServerSideProps or getStaticProps.
- Improved SSR and SSG
  - Server-Side Rendering (SSR) and Static Site Generation (SSG) are now more streamlined.
  - The App Router allows for per-route rendering strategies, meaning you can mix SSR, SSG, and client-side rendering in the same app.
- Parallel and Intercepting Routes
  - Parallel routes: You can render multiple routes simultaneously, useful for complex layouts.
  - Intercepting routes: Enables rendering a route within another route without full navigation, improving user experience.

These updates make Next.js routing more powerful, scalable, and developer-friendly, especially for large and complex applications. If you're transitioning from the Page Router to the App Router, it's worth exploring the official documentation for detailed migration steps and examples.
