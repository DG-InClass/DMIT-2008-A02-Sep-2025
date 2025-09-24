# Takeaways (Summary)

Here are some key takeaways about NextJS/React projects created using `npx create-next-app@latest [folder-name]`

- This way to create apps is **deprecated** as of Feb 2025! ***But*** we are still going to use it in this course. `¯\_(ツ)_/¯`
- **Always** pay attention to the versions of React/NextJS that you are using (see your `package.json`)! 🤞
- The common settings we'll use when creating a NextJS app will be:
  - No TypeScript
  - ESLint
  - No to all the other questions
- 🚨 *The various `README.md` docs in this workbook's starter kits are **OLD** and probably have broken links to different pages.*
  - *Watch me* as I trouble-shoot these with you live in class. You might learn something about problem solving. 👀🤣
- There is **no `index.html`** file!
- We will name our file the same as our component. E.g.: `HelloReact` for the following

    ```js
    export default function HelloReact() {
        //... return JSX ...
    }
    ```

- Array functions like `.map()` and `.filter()` are your friends. Understand how these work, because we'll be using them often for array-like data/props!
- `~/pages/index.js` is the entry point (**home page**) of your app.
- Components used for layout (such as `_document.js` and `_app.js`) are typically prefixed with an underscore.
- `~/pages/_document.js` is where the **HTML shell** is rendered.
  - This is a great place to add things like `<link>`, especially for things like fonts.
- `~/pages/_app.js` is a general wrapper for the SPA as a whole, and it takes in and renders the *page component* (our `index.js`). The `App` is essentially where the content for the body's `<Main />` is placed/rendered.
  - This is where we'll add global stylesheets, such as `import 'bootstrap/dist/css/bootstrap.min.css';` or ``.
- **Styling is HARD** 👀 That's why there are so *very* many React libraries out there with oodles of components.
  - Getting both the ***presentation* and *functionality*** just the way you want can be a lot of work, *even when all you do is search for some library to (re-)use*.
  - It's also why I personally prefer *Tailwind CSS* for the styling side of things&hellip;.
  - For most of the course, we'll just use [MUI Components](https://mui.com/material-ui/getting-started/installation/) (*Material UI*) for styling/presentation.
- 🚨☠️ Beware of **Supply-Chain Attacks**, like the ones that plagued npm over the week of Sep 14-20, 2025.
  - *Knowing how HUGE the set of dependencies there are in NextJS/React, especially with 3rd-party component libraries, should give you caution about grabbing just any-old-thing and dropping it in your project.*
  - 📌 **Pin** your dependencies!
