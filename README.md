# code-colors-react

React component for code syntax highlighting.

**Why another code syntax highlighting package?**

- This package is simple to use. It is very lightweight, it essentially just ships a single React component.
- The `highlight.js` dependency is loaded from CDN asynchronously.
- `highlight.js` is run in a Web Worker, so it doesn't block the main thread.
- No layout shifts before the code is highlighted. While the code is being
  highlighted in the Web Worker, the component renders plain text with the
  correct dimensions.

## Installation

```sh
npm i code-colors-react
```

## Usage

```js
import { ColorTokens } from "code-colors-react";

<pre>
  <ColorTokens code={"console.log('hello world');"} lang={"js"} />
</pre>;
```

#### Props

- `code` &mdash; The code to highlight.
- `lang` &mdash; The language of the code. If omitted, it will try to autodetect the language.
- `as` &mdash; The root element to render. Defaults to `"code"`.

## Styling

To style the highlighted code, you can use any of the [pre-defined themes](https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/) from
Prism.

You can do it in JavaScript like so:

```js
import { loadCss } from "thingies/lib/loadCss";

const theme = "github";
const href = `https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/${theme}.min.css`;

loadCss(href, "hljs");
```
