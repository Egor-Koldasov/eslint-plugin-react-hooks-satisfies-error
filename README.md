The demo project to show the error in "eslint-plugin-react-hooks" plugin with TypeScript "satisfies" operator

How to test:
- Install dependensies:
```
yarn
```
- Run eslint:
```
yarn run eslint
```

You should see an error:
```
  7:19  error  React Hook useCallback received a function whose dependencies are unknown. Pass an inline function instead  react-hooks/exhaustive-deps
```
