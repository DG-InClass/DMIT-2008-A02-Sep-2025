# Semantic Tailwind

## Setup

```ps
pnpm init
pnpm add -D vite
pnpm install tailwindcss @tailwindcss/vite
```

Create a `vite.config.js` file with the following:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
