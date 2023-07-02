import * as React from 'react';

export interface ColorTokensProps {
  code: string;
}

export const ColorTokens: React.FC<ColorTokensProps> = ({ code }) => {
  return (
    <>
      {code}
    </>
  );
};
