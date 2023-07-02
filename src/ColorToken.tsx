import * as React from 'react';
import type {TokenNode} from './types';

export interface ColorTokenProps {
  code: string;
  pos: number;
  token: TokenNode;
  prefix?: string;
}

export const ColorToken: React.FC<ColorTokenProps> = ({ code, pos, token, prefix = '' }) => {
  const [type, children, language] = token;
  const elements: React.ReactNode[] = [];
  const length = children.length;

  for (let i = 0; i < length; i++) {
    const child = children[i];
    if (typeof child === 'number') {
      elements.push(code.slice(pos, pos + child));
      pos += child;
    } else {
      elements.push(
        <ColorToken
          key={i}
          code={code}
          pos={pos}
          token={child}
          prefix={prefix}
        />
      );
      pos += child[1].length;
    }
  }

  return (
    <span className={prefix + type} data-lang={language}>
      {elements}
    </span>
  );
};
