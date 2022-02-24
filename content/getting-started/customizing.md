---
title: Customizing
---

## Examples

The live code examples are rendered in `<iframe>` elements. You
can provide additional resources such as CSS for the content of these frames.

### Link CSS files

Modify `./src/@bridgetool/gatsby-theme-dev/live-code-styles.js` file and list the
URLS of CSS files you want to link as the elements of the `linkedCSS` array. For example:

```js
export const linkedCSS = [
  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
];
```

### Provide styles

You can also provide styles as the text content of `styles` variable in
`./src/@bridgetool/gatsby-theme-dev/live-code-styles.js`.


```js

export const styles = `
body {
  color: grey;
}
`;

```