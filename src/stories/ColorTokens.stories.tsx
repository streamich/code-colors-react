import * as React from 'react';
import { ColorTokens, ColorTokensProps } from '..';

export default {
  component: (props: ColorTokensProps) => {
    return (
      <pre>
        <code>
          <ColorTokens {...props} />
        </code>
      </pre>
    );
  },
};

export const Primary = {
  args: {
    code: 'const a = 1;',
    lang: 'js',
  },
};
