# react-hooks-accordion

> A simple accordion made out of react hooks (Yea you heard me it's built based on hooks 🤪 ).

**Don't use in production (Until ReactJS supports hooks in production).**

## table-of-contents

* [Installation](#installation)
* [Dependency](#dependency)
* [Usage](#usage)
* [Props](#props)
  * [title](#title)
  * [children](#children)
  * [onToggle](#ontoggle)
* [Development](#development)
* [Build](#build)

### Installation:

```bash
npm install react-hooks-accordion
yarn add react-hooks-accordion
```

### Dependency:

```js
react@16.7.0-alpha.2
react-dom@16.7.0-alpha.2
```

### Usage:

```js
import React from 'react'
import { render } from 'react-dom'
import Accordion from 'react-hooks-toggled'

render(
  <Accordion title="Accordion Title">
    <ul>
      <li>
        <span>Hello</span>
      </li>
      <li>
        <span>How are you</span>
      </li>
      <li>
        <span>I am good</span>
      </li>
    </ul>
  </Accordion>,
  document.getElementById('root'),
)
```

### Props:

#### Title:

> Type: string

#### Children:

> Type: any

#### onToggle:

> Type: function
> Argument: boolean

Callback when when we toggle the accordion.

### Development:
```bash
npm start
yarn start
```

### Build:
```bash
npm run build
yarn run build
```

#### MIT Licensed
