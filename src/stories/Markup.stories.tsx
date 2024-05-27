import * as React from "react";
import {Markup} from "../Markup";
import {rule} from 'nano-theme';
import {css} from '../style';
import {snippets} from './snippets';

const className = rule(css());

export default {
  component: Markup,
  decorators: [
    (Story) => (
      <pre style={{fontSize: '13.6px'}} className={className}>
        <Story />
      </pre>
    ),
  ],
};

export const HelloWorld = {
  args: {
    ...snippets.HelloWorld,
  },
};

export const Markdown = {
  args: {
    ...snippets.Markdown,
  },
};

export const Benchmark = {
  args: {
    ...snippets.Benchmark,
  },
};

export const Functions = {
  args: {
    ...snippets.Functions,
  },
};

export const JavaScript = {
  args: {
    ...snippets.JavaScript,
  },
};

export const JSON = {
  args: {
    ...snippets.JSON,
  },
};

export const Diff = {
  args: {
    ...snippets.Diff,
  },
};

export const CSS = {
  args: {
    ...snippets.CSS,
  },
};

export const HtmlCss = {
  args: {
    ...snippets.HtmlCss,
  },
};

export const Jsx = {
  args: {
    ...snippets.Jsx,
  },
};

export const Rust = {
  args: {
    ...snippets.Rust,
  },
};

export const DecorateNumbers = {
  args: {
    code: `
const fn = () => 123;
`,
    lang: "js",
    className,
    decorate: (token, children, lang, code, pos) => {
      if (Array.isArray(token)) {
        const [types] = token;
        if (types[0] === 'number') {
          return (
            <span style={{border: '1px solid red'}}>
              {children}
            </span>
          );
        }
      }
    },
  },
};

const Str: React.FC<{str: string}> = ({str}) => {
  if (str[0] === '"' && str[str.length - 1] === '"') {
    return (
      <>
        <span style={{color: '#ccc'}}>"</span>
        <span className="token string">{str.slice(1, -1)}</span>
        <span style={{color: '#ccc'}}>"</span>
      </>
    );
  }

  if (str[0] === "'" && str[str.length - 1] === "'") {
    return (
      <>
        <span style={{color: '#ccc'}}>'</span>
        <span className="token string">{str.slice(1, -1)}</span>
        <span style={{color: '#ccc'}}>'</span>
      </>
    );
  }

  return <span className="token string">{str}</span>;
};

export const DecorateStrings = {
  args: {
    code: `
const fn = () => "hello world" + ' ' + \`!\`;
`,
    lang: "js",
    className,
    decorate: (token, children, lang, code, pos) => {
      console.log(1, token);
      if (Array.isArray(token)) {
        console.log(2, token);
        const [types, stream] = token;
        // console.log(types, stream);
        if (types[0] === 'string' && stream.length === 1 && typeof stream[0] === 'number') {
          console.log(3, token);
          return (
            <Str str={code.slice(pos, pos + stream[0])} />
          );
        }
      }
    },
  },
};
