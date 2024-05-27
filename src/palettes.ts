import {theme, darkTheme} from 'nano-theme';
import {palette, ColorPalette} from './style';

export const light: ColorPalette = {
  ...palette,
  mono1: theme.g(0, .84),
  mono2: theme.g(0, 1 - 0.32),
  mono3: theme.g(0, 1 - 0.64),
  number: '#0a8F3F',
  float: '#016873',
  boolean: '#411888',
  nil: theme.g(0, 0.45),
  undef: theme.g(0, 0.25),
  selection: theme.g(0, 0.08),
};

export const dark: ColorPalette = {
  ...palette,
  mono1: darkTheme.g(0, .84),
  mono2: darkTheme.g(0, 1 - 0.32),
  mono3: darkTheme.g(0, 1 - 0.64),
  col1: 'hsl(187, 47%, 55%)',
  col2: 'hsl(207, 82%, 66%)',
  col3: 'hsl(286, 60%, 67%)',
  col4: 'hsl(95, 38%, 62%)',
  col5: 'hsl(355, 65%, 65%)',
  col6: 'hsl(29, 54%, 61%)',
  number: '#0FaF4F',
  float: '#51a8b3',
  boolean: '#9168c8',
  nil: darkTheme.g(0, 0.45),
  undef: darkTheme.g(0, 0.25),
  selection: darkTheme.g(0, 0.1),
};
