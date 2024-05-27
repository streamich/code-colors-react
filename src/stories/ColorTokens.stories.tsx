import * as React from "react";
import { ColorTokens } from "../ColorTokens";
import {snippets} from './snippets';

export default {
  component: ColorTokens,
  decorators: [
    (Story) => (
      <pre style={{fontSize: '13.6px'}}>
        {Story()}
      </pre>
    ),
  ]
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

export const Types = {
  args: {
    ...snippets.Types,
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
