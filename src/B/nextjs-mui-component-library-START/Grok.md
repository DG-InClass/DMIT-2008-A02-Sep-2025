# Trying to Grok (Understand) NextJS/React


## Components

```jsx
export default function MyComponent() {
  return (
    <>   <<<==== This is an "empty" tag
        <h1>Some "Sister" Tag</h1>
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                {/* we'll add some content here.*/}
            </Box>
        </Container>
    </>
  );
}
```

