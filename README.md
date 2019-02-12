# react-hooks-accordion [![Build Status](https://travis-ci.org/gokulkrishh/react-hooks-accordion.svg?branch=master)](https://travis-ci.org/gokulkrishh/react-hooks-accordion)

> A simple accordion made out of react hooks.

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
react@16.8.1
react-dom@16.8.1
```

### Usage:

```js
import React from 'react'
import { render } from 'react-dom'
import Accordion from 'react-hooks-toggled'

render(
  <Accordion title="Accordion Title" onToggle={(visible) => { alert(`Accordion is ${visible}`) }}>
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

#### onToggle: Callback when we toggle the accordion.

> Type: function

> Argument: boolean

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
