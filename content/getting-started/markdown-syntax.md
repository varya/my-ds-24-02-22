---
title: Markdown Syntax
---

# Header 1
## Header 2
### Haeder 3
#### Header 4
##### Header 5
###### Header 6

## Lists

- Unordered 1
- Unordered 2
- Unordered 3

1. Ordered 1
1. Ordered 2
1. Ordered 3

- Nested 1
  - Nested 1.1
  - Nested 1.2
- Nested 2

<dl>
  <dt>Definition list 1</dt>
  <dd>Description of item 1</dd>
  <dt>Definition list 2</dt>
  <dd>Description of item 2</dd>
</dl>

## Horizontal Separator

<hr/>

## Quote

> More on semantic markup:
>
> - [Semantic Structure – WebAIM](http://webaim.org/techniques/semanticstructure/)

## Table

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| alt | String | | Passed through to alt on img tag |
| size | Number | 20 | adds the `avatar-small` class if less than 24 |
| src | String | | The source url of the avatar image |
| square | Boolean | false| Used to create a square avatar |

## Code block

### Html code

```html
<input type="checkbox" value="1" checked>
```

To provide the code blocks use the following markdown syntax. You can specify the language
for proper highlighting.

<code>
{`
${'```'}html
<input type="checkbox" value="1" checked>
${'```'}
`}
</code>

### Live example

The code in the examples can be rendered so that they can be living!

```html live
<input type="checkbox" value="1" checked> Label
```

Merely add `live` attribute next to the language.

<code>
{`
${'```'}html live
<input type="checkbox" value="1" checked> Label
${'```'}
`}
</code>

### Example without code

Or you can provide a living example of the component but hide its code.

```html live nocode
<input type="checkbox" value="1" checked> Label
```

This is done with an additional `nocode` attribute.

<code>
{`
${'```'}html live nocode
<input type="checkbox" value="1" checked> Label
${'```'}
`}
</code>

### React live examples

Live examples work also with the linked React components. You can give a code
example and render its preview.

```jsx live
<AwesomeButton type="primary">Primary</AwesomeButton>
```

<code>
{`
${'```'}jsx live
<AwesomeButton type="primary">Primary</AwesomeButton>
${'```'}
`}
</code>

Or you can choose to hide the code block leaving only the preview.

```jsx live nocode
<AwesomeButton type="primary">Primary</AwesomeButton>
```

<code>
{`
${'```'}jsx live nocode
<AwesomeButton type="primary">Primary</AwesomeButton>
${'```'}
`}
</code>

And the code blocks alone work for React examples as well.


```jsx
<AwesomeButton type="primary">Primary</AwesomeButton>
```

<code>
{`
${'```'}jsx
<AwesomeButton type="primary">Primary</AwesomeButton>
${'```'}
`}
</code>

## Special blocks

### Do and don't

#### With images
<DoDontContainer>
  <Do src="https://user-images.githubusercontent.com/586552/63106528-06de5100-bf51-11e9-8a5e-98583ed74874.png">
    Use brief and direct communication
  </Do>
  <Dont src="https://user-images.githubusercontent.com/586552/63106527-06de5100-bf51-11e9-858c-72de6a5c728a.png">
    Don't use wordy and redundant copy
  </Dont>
</DoDontContainer>

#### With HTML
<DoDontContainer>
  <Do>
    Use brief and <b>direct communication</b>
  </Do>
  <Dont>
    Don't use wordy and redundant copy
  </Dont>
</DoDontContainer>

#### With makrdown (TODO)
<DoDontContainer>
  <Do>
    Use brief and direct communication **test**
  </Do>
  <Dont>
    Don't use wordy and redundant copy
  </Dont>
</DoDontContainer>


### Caption

import { Caption } from '@bridgetool/gatsby-theme-dev'

<img alt="" src="https://s3.us-west-2.amazonaws.com/photos.puppyspot.com/breeds/245/card/500000291_medium.jpg" />
<Caption>A beautiful husky puppy.</Caption>

## React components from a global scope

<ButtonDanger>Button Danger</ButtonDanger>

## Live React

```jsx live
<Button>Button</Button>
<ButtonDanger>Button Danger</ButtonDanger>
<ButtonOutline>Button Outline</ButtonOutline>
<ButtonPrimary>Button Primary</ButtonPrimary>
```