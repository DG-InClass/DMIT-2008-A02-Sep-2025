

```diff lang="json"
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
      "lint": "next lint",
      "test": "jest",
      "test:watch": "jest --watch"
    },
    "dependencies": {
-     "@emotion/react": "^11.10.4",
-     "@emotion/styled": "^11.10.4",
-     "@mui/material": "^5.10.8",
+     "@emotion/react": "11.10.4",
+     "@emotion/styled": "11.10.4",
+     "@mui/material": "5.10.8",
      "next": "13.0.5",
      "react": "18.2.0",
      "react-dom": "18.2.0"
    },
    "devDependencies": {
+     "@testing-library/jest-dom": "^6.9.1",
+     "@testing-library/react": "^16.3.0",
+     "jest": "^30.2.0",
+     "jest-environment-jsdom": "^30.2.0",
      "eslint": "8.28.0",
      "eslint-config-next": "13.0.5"
    }
```
