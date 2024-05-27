import {theme, darkTheme} from 'nano-theme';
import {palette, ColorPalette} from './style';

export const light: ColorPalette = {
  ...palette,
  mono1: theme.g(0.08),
  mono2: theme.g(0.32),
  mono3: theme.g(0.64),
  // variable: '#e00e44',
  // string: '#e00e44',
  number: '#0a8F3F',
  float: '#016873',
  boolean: '#411888',
};

export const dark: ColorPalette = {
  ...palette,
  mono1: darkTheme.g(0.08),
  mono2: darkTheme.g(0.32),
  mono3: darkTheme.g(0.64),
  number: '#0FaF4F',
  float: '#51a8b3',
  boolean: '#9168c8',
  // nil: [theme.g(0, 0.4), darkTheme.g(0, 0.4)],
  // undef: [theme.g(0, 0.2), darkTheme.g(0, 0.2)],
  // str: ['#e00e44', '#f01e54'],
  // bool: ['#411888', '#9168c8']
  // zero: ['#748A00', '#94AA11'],
};
