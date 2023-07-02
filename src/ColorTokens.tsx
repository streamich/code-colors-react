import * as React from 'react';
import {tokens} from './util';
import type {Token} from './types';

const {createElement: h} = React;

const astToReact = (ast: Token, code: string, pos: number, prefix: string): [node: React.ReactNode, length: number] => {
  if (typeof ast === 'number') return [code.slice(pos, pos + ast), ast];
  const [type, tokens, language] = ast;
  const children: React.ReactNode[] = [];
  const length = tokens.length;
  let nodeTextLength = 0;
  for (let i = 0; i < length; i++) {
    const token = tokens[i];
    const [node, len] = astToReact(token, code, pos + nodeTextLength, prefix);
    nodeTextLength += len;
    children.push(node);
  }
  const props = {
    className: prefix + type,
    'data-lang': language,
    children,
  };
  return [h('span', props), nodeTextLength];
};

export interface ColorTokensProps {
  code: string;
  lang?: string;
  prefix?: string;
}

export const ColorTokens: React.FC<ColorTokensProps> = ({ code, lang, prefix = ''}) => {
  const [node, setNode] = React.useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    setNode(null);
    let unmounted = false;
    tokens(code, lang)
      .then((ast) => {
        if (!unmounted) {
          const [node] = astToReact(ast, code, 0, prefix);
          setNode(node);
        }
      })
      .catch((err) => {});
    return () => {
      unmounted = true;
    };
  }, [code]);

  return node ? node : <>{code}</>;
};
