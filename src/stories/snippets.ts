export type Snippet = {
  code: string;
  lang: string;
};

export const snippets: Record<string, Snippet> = {
  HelloWorld: {
    code: "console.log('hello world');",
    lang: "js",
  },

  Markdown: {
    code: `
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
    `,
    lang: "md",
  },

  Benchmark: {
    code: `
const iterations = 1000e6;

var sum = 0;
const iteration = () => sum += Math.random();

const t1 = performance.now();
for (let i = 0; i < iterations; i++) iteration();
const t2 = performance.now();

console.log('Result:', sum, 'Ops/sec:', (iterations / ((t2 - t1) / 1000) / 1e6).toFixed(1), 'M');
// Result: 500002092.3119511 Ops/sec: 96.7 M
`,
    lang: "js",
  },

  Functions: {
    code: `
const fn = () => {};

export function add(a, b) {
  return a + b;
}

export const gg = {
  a: () => true,
  b() { return false; },
  *c() { yield 1; },
  async d() { return 2; },
};
`,
    lang: "js",
  },

  Types: {
    code: `export const types = {
  num: 123,
  float: 1.23,
  zero: 0,
  doubleZero: 0.0,
  negative: -1,
  t: true,
  f: false,
  nil: null,
  undef: undefined,
  str: 'hello world',
  str2: "hello world",
  str3: \`hello world\`,
  arr: [1, 2, 3],
  nestedArr: [[1, 2], [3, 4]],
  obj: {a: 1, b: 2},
  regex: /hello/,
  date: new Date(),
};
`,
    lang: "jsx",
  },

  JavaScript: {
    code: `
'use strict';

var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, b = 1.23e3, i = str.length;
    with (window) {
      while (i) h = (h * 33) ^ str.charCodeAt(--i);
      return '_' + (h >>> -0).toString(36);
    }
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === \`object\`;
    eval('var window = this;');

    // Check if we are really in browser environment.
    if (process.env.NODE_ENV !== 'production') {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global (http://example.com) seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: [true, false],
        pfx: '',
        client: null,
        assign: undefined,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        [Symbol()]: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ""  : ' ') + selector;
        },
    }, config);
};
`,
    lang: "js",
  },

  JSON: {
    code: `
{
  "name": "one-light-syntax",
  "theme": "",
  "seq": 0,
  "booleans": [false, true],
  "lat-lng": [37.7749, 0.0],
  "tokens": [1, null, 2, undefined],
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
  },

  Diff: {
    code: `
--- bar.yml	2014-12-16 11:43:41 +0800
+++ /Users/foo/Desktop/bar.yml	2014-12-31 11:28:08 +0800
@@ -4,5 +4,5 @@
project:
  sources: "src/*.cpp"
  headers: "src/*.h"
-    qt: core
+    qt: core gui
public_headers: "src/*.h"
`,
    lang: "diff",
  },

  CSS: {
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

body { 
  font-family: 'Helvetica';
  text-align: center; 
}

.main-box{ 
  display: flex;
  flex-wrap: wrap;
}
.one + .two > .three, .four { 
  flex-basis: 40%;
}
`,
    lang: "css",
  },

  HtmlCss: {
    code: `
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
  <body id="MyApp">
    <h1 alt="Yup, header">This is a heading</h1>
    <p bool num="123">This is a paragraph.</p>
    <a href="https://example.com"><b>This</b> is a link</a>
    <script>
      console.log('Hello World');
      alert('Hello there...');
    </script>
  </body>
</html>
`,
    lang: "html",
  },

  Jsx: {
    code: `
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
`,
    lang: "jsx",
  },

  Rust: {
    code: `
// This function takes ownership of a box and destroys it
fn eat_box_i32(boxed_i32: Box<i32>) {
    println!("Destroying box that contains {}", boxed_i32);
}

// This function borrows an i32
fn borrow_i32(borrowed_i32: &i32) {
    println!("This int is: {}", borrowed_i32);
}

fn main() {
  // Create a boxed i32 in the heap, and a i32 on the stack
  // Remember: numbers can have arbitrary underscores added for readability
  // 5_i32 is the same as 5i32
  let boxed_i32 = Box::new(5_i32);
  let stacked_i32 = 6_i32;

  // Borrow the contents of the box. Ownership is not taken,
  // so the contents can be borrowed again.
  borrow_i32(&boxed_i32);
  borrow_i32(&stacked_i32);

  {
      // Take a reference to the data contained inside the box
      let _ref_to_i32: &i32 = &boxed_i32;

      // Error!
      // Can't destroy \`boxed_i32\` while the inner value is borrowed later in scope.
      eat_box_i32(boxed_i32);
      // FIXME ^ Comment out this line

      // Attempt to borrow \`_ref_to_i32\` after inner value is destroyed
      borrow_i32(_ref_to_i32);
  }
`,
    lang: "rust",
  },
};
