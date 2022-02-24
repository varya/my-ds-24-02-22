---
title: Typography
---

Well-defined typography styles in combination with a design system layout grid will create structured content.

## Base

```html live
<p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>
```

## Headings

Headings are made with styles for `<h1>` through `<h6>` tags.

```html live
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Text elements


```html live

<a>Anchor</a><br/>
<em>Emphasis</em><br/>
<small>Small</small><br/>
<strong>Strong</strong><br/>
<u>Underline</u>

```

## How this page is built

To make the typography examples working, we had to provide global styles for all the exmaples. It can be done
in `src/@bridgetool/gatsby-theme-dev/components/live-preview-wrapper.js` file.

```js
import React from 'react'
import milligramStyles from '!!raw-loader!milligram/dist/milligram.css'
import {Frame} from '@bridgetool/gatsby-theme-dev'

function LivePreviewWrapper({children}) {
  return (
    <Frame>
      <style>{milligramStyles}</style>
      <div>{children}</div>
    </Frame>
  )
}

export default LivePreviewWrapper
```

Use `raw-loader` to get the content of your CSS file and output it in `<style>` tag
inside `<Frame>`. This way, you can provide any global CSS, and it will only
apply to the examples not to the documentation pages.