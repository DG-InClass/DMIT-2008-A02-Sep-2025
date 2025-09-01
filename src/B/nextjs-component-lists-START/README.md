# React Component Lists Intro

# Steps

1. Create and Run the Next.js Project
    Create the project
    `npx create-next-app@latest components-lists-example`
    Go in to the folder
    `cd components-lists-example`
    Run the project
    `npm run dev`
2. In the "index.js"
- remove everything in the "main" tag except for the title ("h1").
    - change it to a title you're comfortable with.
- remove the footer.
- Observe the differences on the page as you make these changes.
3. Create a new "components" folder and in that folder create a component file named "SimpsonsCharacters.js". In that file create a function named "SimpsonsCharacters" like you would for any component (this should become second nature shortly.)
- import that file in your "index.js" file.
```js
import SimpsonsCharacters from '../components/SimpsonsCharacters'
```
- use the component in your JSX
```js
<SimpsonsCharacters />
```
4. in the "SimpsonsCharacters.js" file add a list of characters that we're going to loop over.
```js
const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]
```

5. In the "SimpsonsCharacters" we're going to take a look at how to loop over lists in JSX.
- We're going to loop over the `SIMPSON_CHARACTERS` using `map` by using `{}` in the JSX to show that we're going to be using "js" in  your JSX.
- Below we're going to see that we use the `key` on each `<li></li>` element because this is a requirement with react. More on [lists and keys here](https://reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper)
- The component now will look somethis like this.
```jsx
// SIMPSON_CHARACTERS defined up here.

export default function SimpsonsCharacters() {
  return <ul>
    {SIMPSON_CHARACTERS.map((characterName, index)=> {
      return <li key={index}>{characterName}</li>
    })}
  </ul>
}
```

- Observe the differences on the page as you make these changes.
