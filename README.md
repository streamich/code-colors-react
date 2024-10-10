# code-colors-react

React component for code syntax highlighting. [__Preview 📕__][storybook]

[storybook]: https://streamich.github.io/code-colors-react/?path=/story/stories-colortokens--hello-world

**Why another code syntax highlighting package?**

- A simple to use React component.
- It is very lightweight, only ships a small React component, which loads
  tokenization script (~35Kb) in a Web Worker on demand, on first usage.
- The Prism.js tokenization script is loaded from the CDN asynchronously.
- Runs tokenization in a Web Worker, so it doesn't block the main thread.
- Emits Prism.js compatible HTML, so you can use any Prism.js [themes](https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/).
- No layout shifts before the code is highlighted. While the code is being
  highlighted in the Web Worker, the component renders plain text with the
  correct dimensions.
- If code changes while it is being highlighted, the component will cancel the
  previous highlighting and start a new one.
- Interactive CSS on mouse hover.

## Installation

```sh
npm install code-colors-react
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
const url = `https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/${theme}.min.css`;

loadCss(url);
```

## Examples

Basic JavaScript:

![image](https://github.com/user-attachments/assets/ab0574ab-e99f-4a05-b187-c4a5d6d48850)

Negative values with red background:

![image](https://github.com/user-attachments/assets/eddeb75e-7e85-4c88-8a80-04fa70744bb6)

Nested languages: JavaScript and CSS inside HTML:

![image](https://github.com/user-attachments/assets/68f296f7-994b-4ddd-b7ce-401cb536a607)

[See more examples][storybook].

