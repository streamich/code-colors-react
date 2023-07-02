import * as React from 'react';
import {tokens} from './util';
import type {TokenNode} from './types';
import {ColorToken} from './ColorToken';

export interface ColorTokensProps {
  code: string;
  lang?: string;
  prefix?: string;
}

export const ColorTokens: React.FC<ColorTokensProps> = ({ code, lang, prefix }) => {
  const [ast, setAst] = React.useState<TokenNode | null>(null);

  React.useEffect(() => {
    setAst(null);
    let unmounted = false;
    tokens(code, lang)
      .then((ast) => {
        if (!unmounted) setAst(ast);
      })
      .catch((err) => {});
    return () => {
      unmounted = true;
    };
  }, [code]);

  if (ast) {
    return (
      <ColorToken
        code={code}
        pos={0}
        token={ast}
        prefix={prefix}
      />
    );
  }

  return (
    <>
      {code}
    </>
  );
};
