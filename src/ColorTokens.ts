import * as React from "react";
import { useTheme, rule } from "nano-theme";
import * as palettes from "./palettes";
import { Markup, MarkupProps } from "./Markup";
import { css } from "./style";

const lightClass = rule(css(palettes.light));
const darkClass = rule(css(palettes.dark));

export interface ColorTokensProps extends MarkupProps {}

export const ColorTokens: React.FC<ColorTokensProps> = (props) => {
  const theme = useTheme();

  return React.createElement(Markup, {
    ...props,
    className:
      (props.className ?? "") + (theme.isLight ? lightClass : darkClass),
  });
};
