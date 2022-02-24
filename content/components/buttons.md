---
title: Buttons
path: components/buttons
status: Stable
source: 'https://github.com/primer/css/tree/master/src/buttons'
---

Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.

## Awesome Button

### Primary Button

```jsx live nocode
<AwesomeButton type="primary">Primary</AwesomeButton>
```

### Button sizes

```jsx live

There is a <AwesomeButton
  size="small"
  type="primary"
>
  Small
</AwesomeButton>, <AwesomeButton
  size="medium"
  type="primary"
>
  Medium
</AwesomeButton>, and <AwesomeButton
  size="large"
  type="primary"
>
  Large
</AwesomeButton>!
```

### Button with Icon

```jsx live
<AwesomeButton
  size="icon"
  type="primary"
>
  <i className="fa fa-codepen" />
</AwesomeButton>
```

## Progress Button

### Secondary Progress Button

```jsx live
<AwesomeButtonProgress
  type="secondary"
>
  Secondary
</AwesomeButtonProgress>
```

## Social Button

Social buttons use brand colors of social networks and display their button. You can provide
are URL to there the social button navigates.

```jsx live
<AwesomeButtonSocial
  type="facebook"
  url="http://bridgetool.io/"
>
  Facebook
</AwesomeButtonSocial>

<AwesomeButtonSocial
  type="twitter"
  url="http://bridgetool.io/"
>
  Twitter
</AwesomeButtonSocial>

<AwesomeButtonSocial
  type="instagram"
  url="http://bridgetool.io/"
>
  Instagram
</AwesomeButtonSocial>
```

## Actions

You can use `action` property to provide a callback on the button click. This is how
the button works in a simple counter application.

```javascript live noinline
function DemoApp() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <AwesomeButton action={() => setCount(n => n - 1)}>-</AwesomeButton>
      {count}
      <AwesomeButton action={() => setCount(n => n + 1)}>+</AwesomeButton>
    </div>
  )
}
render(<DemoApp />)
```

## How this page works

This page documents `<AwesomeButton>`, `<AwesomeButtonProgress>`, and `<AwesomeButtonSocial>` components from [React Awesome Button library](https://caferati.me/demo/react-awesome-button).



We expend the Gatsby theme of this website adding special files to `./src/@bridgetool/gatsby-theme-dev`.

To make the components available in the examples, we link the library in `live-code-components.js` and list all
its components.

```js
import * as awesomeButtons from "react-awesome-button"
import "react-awesome-button/dist/styles.css";

export default {
  // ... other libraries and/or components
  ...awesomeButtons,
}
```

Besides, it can be used in markdown. To make it happen, we put this component to the global scope listing it in
`markdown-components.js`

```js
import * as awesomeButtons from "react-awesome-button"
import "react-awesome-button/dist/styles.css";

export default {
  // ... other libraries and/or components
  ...awesomeButtons,
}
```

The icon button uses FontAwesome, so we linked it from CDN. Look at the [Customizing](/getting-started/customizing#link-css-files) page to learn how.