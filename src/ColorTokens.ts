import * as React from "react";
import {Markup, MarkupProps} from './Markup';

const { createElement: h } = React;

export interface ColorTokensProps extends MarkupProps {
}

export const ColorTokens: React.FC<ColorTokensProps> = (props) => {
  return h(Markup, props);
};
