import * as React from "react";
import { ColorTokens, ColorTokensProps } from "..";
import { loadCss } from "thingies/lib/loadCss";
import {rule} from 'nano-theme';
import {css} from '../style';

const className = rule(css());

// loadCss(
//   "https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-light.min.css",
//   "code-colors",
// );

import '../style';

export default {
  component: (props: ColorTokensProps) => {
    return (
      <pre>
        <ColorTokens {...props} />
      </pre>
    );
  },
};

export const HelloWorld = {
  args: {
    code: "console.log('hello world');",
    lang: "js",
    className,
  },
};

const code1 = `
# memfs

[![][chat-badge]][chat] [![][npm-badge]][npm-url]

[chat]: https://onp4.com/@vadim/~memfs
[chat-badge]: https://img.shields.io/badge/Chat-%F0%9F%92%AC-green?style=flat&logo=chat&link=https://onp4.com/@vadim/~memfs
[npm-url]: https://www.npmjs.com/package/memfs
[npm-badge]: https://img.shields.io/npm/v/memfs.svg

JavaScript file system utilities for Node.js and browser.
This is *italic* and this is __bold__.

~~~js
consol.log('Hello World');
~~~

\`\`\`js
consol.log('Hello World');
\`\`\`

> This is a blockquote.

- Item 1
- Item 2
  - Item 2.1
`;

export const Markdown = {
  args: {
    code: code1,
    lang: "md",
    className,
  },
};

const code2 = `
const iterations = 1000e6;

var sum = 0;
const iteration = () => sum += Math.random();

const t1 = performance.now();
for (let i = 0; i < iterations; i++) iteration();
const t2 = performance.now();

console.log('Result:', sum, 'Ops/sec:', (iterations / ((t2 - t1) / 1000) / 1e6).toFixed(1), 'M');
// Result: 500002092.3119511 Ops/sec: 96.7 M
`;

export const Benchmark = {
  args: {
    code: code2,
    lang: "js",
    prefix: "hljs-",
    className,
  },
};

export const JavaScript = {
  args: {
    code: `
'use strict';

var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;
    while (i) h = (h * 33) ^ str.charCodeAt(--i);
    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === \`object\`;

    // Check if we are really in browser environment.
    if (process.env.NODE_ENV !== 'production') {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
    }, config);
};
`,
    lang: "js",
    className,
  },
};

export const JSON = {
  args: {
    code: `
{
  "name": "one-light-syntax",
  "theme": "syntax",
  "version": "1.8.4",
  "description": "Atom One light syntax theme",
  "keywords": [
    "light",
    "syntax"
  ],
  "repository": "https://github.com/atom/atom",
  "license": "MIT",
  "engines": {
    "atom": ">0.40.0"
  }
}
`,
    lang: "json",
    className,
  },
};

export const CSS = {
  args: {
    code: `
.container {
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 1rem;
  transition: background 0.3s;
}
@media (min-width: 768px) {
  #container > .container {
    grid-template-rows: 1fr 1fr;
    cursor: pointer !important;
    background: url('https://example.com/image.jpg');
  }
}    
`,
    lang: "css",
    className,
  },
};

const code3 = `
<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    display: grid;
    grid-template-rows: 1fr 2fr;
    gap: 1rem;
    transition: background 0.3s;
  }
  @media (min-width: 768px) {
    #container > .container {
      grid-template-rows: 1fr 1fr;
      cursor: pointer !important;
      background: url('https://example.com/image.jpg');
    }
  }  
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
`;

export const HtmlCss = {
  args: {
    code: code3,
    lang: 'html',
    className,
  },
};

const code4 = `
import {Avatar} from 'p4-ui/lib/inline/Avatar';

<Avatar width={64} src={'abc'} />

const Component = () => {
  return (
    <div style={{border: '1px solid red'}}>
      <h1 alt>Hello World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {!!open && (<Toast message="Hello World" />)}
    </div>
  );
};
`;

export const Jsx = {
  args: {
    code: code4,
    lang: "jsx",
    className,
  },
};
