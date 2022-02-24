---
title: Spinner
path: components/spinner
status: Stable
source: 'https://github.com/KyleAMathews/react-spinkit'
---

Spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway.

## Usage

Spinners are used when retrieving data or performing slow computations. They notify to the user that their request is being processed. Although they do not provide details about what is occurring on the back-end, they reassure the user that their action is being processed.

Use a loading spinner whenever the wait time is anticipated to be longer than three seconds.

### Types of spinners

Classic spinner is a rotating unclosed circle.

```jsx live nocode
<Spinner name="ball-clip-rotate" />
```


In some designs, this shape is modified to match the other styles.

```jsx live nocode
<Spinner name="circle" />
```

There can be other shapes of spinners. Sometimes it is the shape what creates connection to specific application.

```jsx live nocode
<Spinner name="line-scale" />
```


### Branding spinners

Spinners should be aligned with other brand elements and used the color from the design system
palette.

```jsx live nocode
<Spinner name="circle" color="coral"/>
```

## Documenting

For the sake of visual consistency it is good to provide the living examples
in special blocks (as you could see above.

However, you can choose to put it inline in the very
documenttaion text.

<Spinner name="pulse" />

Looks amazing!

## Code

This spinner is a React component and can be used as the following.

```jsx
<Spinner name="circle" />
```

Changing that `name` and `color` attributes you can change its visual. Play around
with this live example. Try to give it a name `hree-bounce` and color `orange`. You can also write a text before or after it.

```jsx live
<Spinner name="folding-cube" color="fuchsia"/> loading...
```

## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| name | String | 'three-bounce' | Name of spinner. Find full list in the [react-spinkit docs](http://kyleamathews.github.io/react-spinkit/) |
| color | String | | Color of the spinner |
| fadeIn | String | 'full' | 'full', 'half', 'quarter', 'none' |
| noFadeIn | Boolean | false | |
| overrideSpinnerClassName | String | '' | Class to replace spinner CSS classes |
| className | String | | Class to be added to the spinner |

## How this page works

This pages shows a Spinner component from [react-spinkit](http://kyleamathews.github.io/react-spinkit/) library.

We expend the Gatsby theme of this website adding special files to `./src/@bridgetool/gatsby-theme-dev`.

To make the Spinner available in the examples, we link the library in `live-code-components.js`:

```js
import Spinner from 'react-spinkit'

export default {
  // ... other libs and/or components here
  Spinner,
}
```

Besides, it can be used in markdown. To make it happen, we put this component to the global scope listing it in
`markdown-components.js`

```js
import Spinner from 'react-spinkit'

export default {
  // ... other libs and/or components here
  Spinner,
}
```