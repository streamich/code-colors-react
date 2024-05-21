import * as React from 'react';
import { ColorTokens, ColorTokensProps } from '..';
import {loadCss} from 'thingies/lib/loadCss';

loadCss('https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/github.min.css', 'hljs');


export default {
  component: (props: ColorTokensProps) => {
    return (
      <pre>
        <ColorTokens {...props} className={'hljs'} />
      </pre>
    );
  },
};

export const HelloWorld = {
  args: {
    code: "console.log('hello world');",
    lang: 'js',
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
`;

export const Markdown = {
  args: {
    code: code1,
    lang: 'md',
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
    lang: 'js',
    prefix: 'hljs-',
  },
};


const code3 = `
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
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
    </div>
  );
};
`;

export const Jsx = {
  args: {
    code: code4,
    lang: 'jsx',
  },
};
