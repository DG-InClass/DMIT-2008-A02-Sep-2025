# React Component Lists Intro

# Why?

You're going to want to use some styling perhaps on top of material ui (and material ui theming). This is where something like Sass comes in which is handy.

# Steps

1. Create and Run the Next.js Project
- Go in to the folder
`cd sass-lists-example`
- Install all of the dependencies
`npm install`
- Run the project
`npm run dev`
2. Install sass so we can begin to use sass modules in next.js
`npm install sass --save-dev`

3. We'll be putting our sass files in our `styles` folder, but we need to configure next.js to look at this folder and able to build the sass. 
- open your `next.config.js` it should look something like this:
```js
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```
- We're going to add a couple lines to add the sass support [as shown here](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
so that our `next.config.js` becomes
```js
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
```
- run your project again and you shouldn't be having any issues.
4. Let's Create a Sass file.
- In the `styles` folder create a file named `SimpsonsCharacters.module.scss` and we're going to add the following lines 
```scss
.list {
  background-color: #9bdcdf;
  min-width: 18%;
  list-style: none;
  padding-top:  10px;
  padding-bottom:  10px;
}

.list-item {
  font-weight: 100;

  &:hover {
    font-size: 120%;
  }
}

.spacing {
  margin: 5px;
}
```
Note: we're not going to cover sass in this course, but what you need to know here is that there's three sass classes "list", "list-item" and "spacing" that we're going to use.
- in your `components/SimpsonsCharacters.js` import the sass module.
```js
import styles from '../styles/SimpsonsCharacters.module.scss'
```
Note: that your imports are always going to be at the top of the file (try to keep the same type of imports together.)
- next you are going to use the "list" class on the `ul` so your component should look like so:
```jsx
//... imports and list ...

export default function SimpsonsCharacters() {
  return <ul className={styles.list}>
    {SIMPSON_CHARACTERS.map((characterName, index)=> {
      return <li 
          key={index}
        >{characterName}</li>
    })}
  </ul>
}
```
Notes:
You can see what we're adding the styles via the `className` attribute like so `className={styles.list}`. You should also the styles being applied in that the list.
- Let's add a couple of styles to the list item. Change the list item attributes so that it has both styles "spacing" and "list-item" it should look like below
```jsx
//... imports and list ...

export default function SimpsonsCharacters() {
  return <ul className={styles.list}>
    {SIMPSON_CHARACTERS.map((characterName, index)=> {
      return <li 
          key={index}
          className={`${styles['list-item']} ${styles.spacing}`}
        >{characterName}</li>
    })}
  </ul>
}
```
