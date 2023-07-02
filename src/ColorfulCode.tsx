import * as React from 'react';

export interface ColorfulCodeProps {
  code: string;
}

export const ColorfulCode = ({ code }) => {
  return (
    <>
      {code}
    </>
  );
};
