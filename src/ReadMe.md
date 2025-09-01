# `src` Folder

This **`src`** folder is where you will place practice and demo material from each class along with **homework assignments *NOT* worth marks**.

> :warning: **Do *NOT*** use this repository for any assignments that are worth marks. :warning:

----

## Starter Kits

The following starter kits are for in-class and/or practice work in DMIT-2008. They are arranged according to the main topics in the Brightspace course materials. They might differ from starter kits available on Brightspace, but probably not in any significant way.

There may be additional starter kits supplied by your instructor which you can grab using the [ad-hoc](#ad-hoc-starter-kitsdemos) download process using `degit`.

### **A** | JavaScript Language Review

- [Refresher - What You Remember After the Break](./A/review-break-activities-example-START/README.md)
- [Astronauts Example](./A/review-astronauts-example-START/README.md)

*In addition, there are several smaller starter kits focusing on various JavaScript Language aspects that you should recall from CPSC-1520.*

### **B** | Intro to React and NextJS

- [NextJS Intro](./B/nextjs-intro-START/README.md)
- [NextJS Components Intro](./B/nextjs-components-intro-START/README.md)
- [NextJS Component Lists](./B/nextjs-component-lists-START/README.md)
- [Bootstrap Component Library](./B/nextjs-bootstrap-component-library-START/README.md)
- [MUI Component Library](./B/nextjs-mui-component-library-START/README.md)

### **C** | JavaScript Component Libraries and Styling

- [MUI Theming](./C/nextjs-mui-theming-START/README.md)
- [SASS Modules](./C/nextjs-sass-modules-START/README.md)

### **D** | JavaScript Framework Details: State, Events, and Templating

- [Event State Fundamentals](./D/nextjs-event-state-fundamentals-START/README.md)
- [JSX Conditionals](./D/nextjs-event-state-jsx-conditionals-START/README.md)

### **E** | React State with REST APIs

- [REST Reviews](./E/react-rest-reviews-app-START/README.md)
- [REST Fundamentals](./E/react-rest-fundamentals-START/README.md)

### **F** | Development to Production Workflow

- [Vercel GitHub Deployment Example](./F/vercel-github-deployment-example-START/README.md)

### **G** | React Components and LifeCycle

- [App with Lifecycle](./G/reviews-app-with-lifecycle-START/README.md)
- [Mounting Fundamentals](./G/react-mounting-fundamentals-START/README.md)

### **H** | Next.js Pages, Routing and React

- [Pages and Routing](./H/nextjs-pages-and-space-START/README.md)

### **I** | Next.js Frontend Features

- [Frontend Features](./I/nextjs-12-space-page-ssr-START/README.md)
- [Refreshing Our Data](./I/nextjs-12-reviews-app-ssr-START/README.md)

### **J** | Testing React Next.js Applications

> *Note: The Brightspace module shows only two demos/examples, but we have three.*

- [Testing Intro](./J/next-js-testing-example-START/README.md)
- [More Testing](./J/next-js-14-testing-example-START/README.md)
- [Mocking Fetch](./J/next-js-testing-with-mocking-fetch-START/README.md)

### **K** | Application State With React

- [Application State (`useContext`)](./K/rest-reviews-with-context-toast-START/README.md)
- [Authentication](./K/authentication-example-START//README.md)

----

----

## Ad-hoc Starter Kits/Demos

If there is a sample in your instructor's workbook that you want to pull into your own workbook, the easiest way to do that is through a Node package called [**tiged**](https://github.com/tiged/tiged#readme). Here's an example of how to use it to [grab a subdirectory](https://github.com/tiged/tiged#specify-a-subdirectory) from your instructor's workbook:

> ***Note:** The following is based on using the `pnpm dlx` command. If you are using regular node/npm, you should use `npx` instead of `pnpm dlx`.*

```bash
$ pnpm dlx tiged --disable-cache --force PROG-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\____________________________________/ \_______________________________________________/ \___________________/
//      |- Command to run               |- Instructor's source folder (on GitHub)        |- Your local destination folder
```

A more detailed explanation of the command would look like this:

```bash
$ pnpm dlx tiged --disable-cache --force PROG-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\______/ \___/ \_____________/ \_____/ \_______/ \_________________/ \_________________/ \___________________/
// |    |          |          |       |             |                     |                     |- Destination folder
// |    |          |          |       |             |                     |- Instructor's sub-folder
// |    |          |          |       |             |- Name of Instructor's Repo
// |    |          |          |       |- GitHub Organization or User
// |    |          |          |- Force overwrite of existing files
// |    |          |- Disable caching of repo (so you grab the latest version)
// |    |- Command to run
// |- pnpm dlx is a Node package runner (alternative to npx)
```

----
