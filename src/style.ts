import type {CssLikeObject} from 'nano-theme';

// const col1 = '#a151d2';
// // const col2 = '#39464E';
// const col3 = '#ED5C65';
// // const col4 = '#666969';
// // const col5 = '#C82829';
// // const col6 = '#8959A8';
// // const col7 = '#C99E00';
// const col8 = '#718C00';
// const col9 = '#ED5C65';
const col10 = '#2795EE';
// const col11 = '#CD3C45';
// const col12 = '#A0A1A7';
// const col14 = '#444';
// const col15 = '#CD3C45';
// const col16 = '#1fc0c0';
// const col17 = '#BC6060';
// const col18 = '#b76b01';

export interface ColorPalette {
  mono1: string;
  mono2?: string;
  mono3?: string;
  hue1?: string;
  hue2?: string;
  hue3?: string;
  hue4?: string;
  hue5?: string;
  hue52?: string;
  hue6?: string;
  hue62?: string;
  fg: string;
  bg: string;
  gutter: string;
  guide: string;
  accent: string;
  selection: string;
  // const colorSyntaxGutterBackgroundColorSelected = 'hsl(230, 1%, 90%)';
  // const colorSyntaxCursorLine = 'hsla(230, 8%, 24%, 0.05)';

  string?: string;
  keyword?: string;
  builtin?: string;
  'class-name'?: string;
  function?: string;
  boolean?: string;
  number?: string;
  char?: string;
  symbol?: string;
  regex?: string;
  url?: string;
  operator?: string;
  variable?: string;
  constant?: string;
  property?: string;
  punctuation?: string;
  important?: string;
  tag?: string;
  'attr-name'?: string;
  'attr-value'?: string;
  doctype?: string;
  entity?: string;
  atrule?: string;
  selector?: string;
  inserted?: string;
  deleted?: string;
  'function-defintion'?: string;
}

export const palette: ColorPalette = {
  mono1: 'hsl(230, 8%, 24%)',
  mono2: 'hsl(230, 6%, 44%)',
  mono3: 'hsl(230, 4%, 64%)',
  // hue1: 'hsl(198, 99%, 40%)',
  hue1: col10,
  hue2: 'hsl(221, 87%, 60%)',
  hue3: 'hsl(301, 63%, 40%)',
  hue4: 'hsl(119, 34%, 47%)',
  hue5: 'hsl(5, 74%, 59%)',
  hue52: 'hsl(344, 84%, 43%)',
  hue6: 'hsl(35, 99%, 36%)',
  hue62: 'hsl(35, 99%, 40%)',
  fg: 'hsl(230, 8%, 24%)',
  bg: 'hsl(230, 1%, 98%)',
  gutter: 'hsl(230, 1%, 62%)',
  guide: 'hsla(230, 8%, 24%, 0.2)',
  accent: 'hsl(230, 100%, 66%)',
  selection: 'hsl(230, 1%, 90%)',
};

const redSquiggly: CssLikeObject = {
  marb: '-2px',
  bdb: '2px dotted red',
  d: 'inline-block',
  pos: 'relative',
  '&:after': {
    d: 'block',
    content: '""',
    w: '100%',
    h: '4px',
    bdb: '2px dotted red',
    pos: 'absolute',
    t: 'calc(1em - 1px)',
    l: '-2px',
  }
};

export const css = ({
  mono1,
  mono2 = mono1,
  mono3 = mono2,
  hue1 = mono1,
  hue2 = mono2,
  hue3 = mono3,
  hue4 = mono1,
  hue5 = mono2,
  hue52,
  hue6 = mono3,
  hue62,
  fg,
  bg,
  gutter,
  guide,
  accent,
  selection,

  string: str = hue4,
  keyword = hue3,
  builtin = mono1,
  'class-name': className = mono1,
  function: func = mono1,
  boolean = mono1,
  number = mono1,
  string = mono1,
  char = mono1,
  symbol = mono1,
  regex = mono1,
  url = mono1,
  operator = mono1,
  variable = mono1,
  constant = mono1,
  property = mono1,
  punctuation = mono1,
  important = mono1,
  tag = mono1,
  'attr-name': attrName = mono1,
  'attr-value': attrValue = mono1,
  doctype = mono1,
  entity = mono1,
  atrule = mono1,
  selector = mono1,
  inserted = mono1,
  deleted = mono1,
  'function-defintion': functionDefinition = mono1,
}: ColorPalette = palette): CssLikeObject => ({
  // https://prismjs.com/tokens.html
  '.token': {
    '&.string': {
      col: str,
    },
    '&.comment,&.prolog,&.cdata': {
      col: mono3,
    },
    '&.doctype,&.punctuation,&.entity': {
      col: mono1,
    },
    '&.keyword': {
      col: keyword,
    },
    // builtin
    // class-name
    // function
    // boolean
    // number
    // string
    // char
    // symbol
    // regex
    // url
    // operator
    // variable
    // constant
    // property
    // punctuation
    // important
    // tag
    // attr-name
    // attr-value
    // doctype
    // entity
    // atrule
    // selector
    // inserted
    // deleted
    // function-defintion
    // function
    '&.bold': {
      fw: 'bold',
    },
    '&.comment,&.italic': {
      fs: 'italic',
    },
    '&.entity': {
      cur: 'help',
    },
    '&.namespace': {
      op: 0.8,
    },
  },

  '.language-js': {
    '.token': {
      '&.keyword': {
        '&[text=var],&[text=while]': redSquiggly,
      },
      '&.function': {
        '&[text=eval]': redSquiggly,
      },
    },
  },

  '.token.attr-name,.token.class-name,.token.boolean,.token.constant,.token.number,.token.atrule': {
    color: hue6,
  },
  '.token.important,.token.atrule,.token.rule': {
    color: hue3,
  },
  '.token.property,.token.tag,.token.symbol,.token.deleted,.token.important': {
    color: hue5,
  },
  '.token.selector,.token.char,.token.builtin,.token.inserted,.token.regex,.token.attr-value,.token.attr-value > .token.punctuation': {
    color: hue4,
  },
  '.token.variable,.token.operator,.token.function': {
    color: hue2,
  },
  '.token.url': {
    color: hue1,
  },
  '.token.attr-value > .token.punctuation.attr-equals,.token.special-attr > .token.attr-value > .token.value.css': {
    color: mono1,
  },
  '.token.url,.token.string.url': {
    color: hue4,
  },
  '.token.selector': {
    color: hue1,
  },
  '.token.property': {
    color: mono1,
  },
  '.language-css .token.property': {
    color: mono3,
  },
  '.token.function,.token.url > .token.function': {
    color: hue1,
  },
  '.token.null.keyword': {
    color: hue6,
  },
  '.token.content': {
    color: hue2,
  },
  '.token.blockquote.punctuation,.token.hr.punctuation': {
    color: mono3,
  },
  '.token.code-snippet': {
    color: hue4,
  },
});

// /**
//  * One Light theme for prism.js
//  * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
//  */

// /**
//  * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
//  * From colors.less
//  * --mono-1: hsl(230, 8%, 24%);
//  * --mono-2: hsl(230, 6%, 44%);
//  * --mono-3: hsl(230, 4%, 64%)
//  * --hue-1: hsl(198, 99%, 37%);
//  * --hue-2: hsl(221, 87%, 60%);
//  * --hue-3: hsl(301, 63%, 40%);
//  * --hue-4: hsl(119, 34%, 47%);
//  * --hue-5: hsl(5, 74%, 59%);
//  * --hue-5-2: hsl(344, 84%, 43%);
//  * --hue-6: hsl(35, 99%, 36%);
//  * --hue-6-2: hsl(35, 99%, 40%);
//  * --syntax-fg: hsl(230, 8%, 24%);
//  * --syntax-bg: hsl(230, 1%, 98%);
//  * --syntax-gutter: hsl(230, 1%, 62%);
//  * --syntax-guide: hsla(230, 8%, 24%, 0.2);
//  * --syntax-accent: hsl(230, 100%, 66%);
//  * From syntax-variables.less
//  * --syntax-selection-color: hsl(230, 1%, 90%);
//  * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
//  * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
//  */

// code[class*="language-"],
// pre[class*="language-"] {
// 	background: hsl(230, 1%, 98%);
// 	color: hsl(230, 8%, 24%);
// 	font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;
// 	direction: ltr;
// 	text-align: left;
// 	white-space: pre;
// 	word-spacing: normal;
// 	word-break: normal;
// 	line-height: 1.5;
// 	-moz-tab-size: 2;
// 	-o-tab-size: 2;
// 	tab-size: 2;
// 	-webkit-hyphens: none;
// 	-moz-hyphens: none;
// 	-ms-hyphens: none;
// 	hyphens: none;
// }

// /* Selection */
// code[class*="language-"]::-moz-selection,
// code[class*="language-"] *::-moz-selection,
// pre[class*="language-"] *::-moz-selection {
// 	background: hsl(230, 1%, 90%);
// 	color: inherit;
// }

// code[class*="language-"]::selection,
// code[class*="language-"] *::selection,
// pre[class*="language-"] *::selection {
// 	background: hsl(230, 1%, 90%);
// 	color: inherit;
// }

// /* Code blocks */
// pre[class*="language-"] {
// 	padding: 1em;
// 	margin: 0.5em 0;
// 	overflow: auto;
// 	border-radius: 0.3em;
// }

// /* Inline code */
// :not(pre) > code[class*="language-"] {
// 	padding: 0.2em 0.3em;
// 	border-radius: 0.3em;
// 	white-space: normal;
// }
