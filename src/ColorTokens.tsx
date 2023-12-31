import * as React from 'react';
import {tokens} from './util';
import type {Token} from './types';

const {createElement: h} = React;

const astToReact = (ast: Token, code: string, pos: number, prefix: string, as: string, rest: {[key: string]: unknown} = {}): [node: React.ReactNode, length: number] => {
  if (typeof ast === 'number') return [code.slice(pos, pos + ast), ast];
  const [types, tokens, language] = ast;
  const children: React.ReactNode[] = [];
  const length = tokens.length;
  let nodeTextLength = 0;
  for (let i = 0; i < length; i++) {
    const token = tokens[i];
    const [node, len] = astToReact(token, code, pos + nodeTextLength, prefix, 'span');
    nodeTextLength += len;
    children.push(node);
  }
  const props = {
    className: prefix + types.shift() + (types.length ? ' ' + types.join(' ') : ''),
    'data-lang': language,
  };
  return [h(as, {...props, ...rest, className: props.className + (rest.className ? ' ' + rest.className : '')}, ...children), nodeTextLength];
};

export interface ColorTokensProps {
  code: string;
  as?: string;
  lang?: string;
  prefix?: string;
  [key: string]: unknown;
}

export const ColorTokens: React.FC<ColorTokensProps> = ({ code, lang, prefix = 'hljs-', as = 'code', ...rest}) => {
  const [node, setNode] = React.useState<React.ReactNode | null>(null);

  const Tag = as as any;

  React.useEffect(() => {
    setNode(null);
    let unmounted = false;
    tokens(code, lang)
      .then((ast) => {
        if (!unmounted) {
          const [node] = astToReact(ast, code, 0, prefix, Tag, rest);
          setNode(node);
        }
      })
      .catch((err) => {});
    return () => {
      unmounted = true;
    };
  }, [code]);

  return node || <Tag {...rest}>{code}</Tag>;
};
