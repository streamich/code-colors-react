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
  hue6?: string;
  selection: string;
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
}

export const palette: ColorPalette = {
  mono1: 'hsl(230, 8%, 24%)',
  mono2: 'hsl(230, 6%, 44%)',
  mono3: 'hsl(230, 4%, 64%)',
  hue1: col10,
  hue2: 'hsl(221, 87%, 60%)',
  hue3: '#a626a4',
  hue4: 'hsl(119, 34%, 47%)',
  hue5: 'hsl(5, 74%, 59%)',
  hue6: 'hsl(35, 99%, 36%)',
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

const backgroundPadding: CssLikeObject = {
  d: 'inline-block',
  bdrad: '.2em',
  mar: '-.1em',
  pad: '.1em',
};

const redBackground: CssLikeObject = {
  ...backgroundPadding,
  bg: 'rgba(255,0,0,.08)',
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
  hue6 = mono3,
  selection,

  string: str = hue4,
  keyword = hue3,
  builtin = hue4,
  'class-name': className = hue5,
  function: func = hue2,
  boolean = hue2,
  number = hue6,
  char = hue4,
  symbol = hue5,
  regex = hue4,
  operator = hue1,
  variable = hue2,
  constant = hue6,
  property = mono1,
  punctuation = mono1,
  important = hue5,
  tag = hue5,
  'attr-name': attrName = mono3,
  'attr-value': attrValue = hue4,
  atrule = hue3,
  selector = hue1,
}: ColorPalette = palette): CssLikeObject => {
  const lightBg = 'rgba(127,127,127,.1)';
  const lighterBg = 'rgba(127,127,127,.04)';

  return {
    '::selection': {
      bg: selection,
      col: 'inherit',
    },
    '.token': {
      '&.comment,&.prolog,&.cdata': {
        col: mono3,
      },
      '&.doctype': {
        col: mono1,
        fw: 'bold',
      },
      '&.entity': {
        col: mono1,
        cur: 'help',
      },
      '&.keyword': {
        col: keyword,
        '&[text=null],&[text=nil],&[text=undefined]': {
          col: mono3,
        },
      },
      '&.builtin': {
        col: builtin,
      },
      '&.class-name': {
        col: className,
        fw: 'bold',
      },
      '&.important': {
        col: important,
        ...redSquiggly,
      },
      '&.function': {
        col: func,
      },
      '&.boolean': {
        col: boolean,
        fw: 'bold',
        '&[text=false]': redBackground,
      },
      '&.number': {
        ...backgroundPadding,
        col: number,
        '&:hover': {
          bg: lightBg,
        },
        '&[text="0"],&[text="0.0"]': redBackground,
      },
      '&.string': {
        col: str,
        '&[text="\'\'"],&[text=\'""\']': redBackground,
        '&:hover': {
          td: 'underline',
        },
      },
      '&.char': {
        col: char,
      },
      '&.symbol': {
        col: symbol,
      },
      '&.regex': {
        col: regex,
        '&:hover': {
          td: 'underline',
        },
      },
      '&.url.string': {
        td: 'underline',
      },
      '&.operator': {
        col: operator,
      },
      '&.variable': {
        col: variable,
      },
      '&.constant': {
        col: constant,
      },
      '&.property': {
        col: property,
        '&:hover': {
          td: 'underline',
        },
      },
      '&.punctuation': {
        col: punctuation,
        '&[text="."]': {
          color: mono3,
        },
      },
      '&.tag': {
        col: tag,
      },
      '&.attr-name': {
        col: attrName,
      },
      '&.attr-value': {
        col: attrValue,
      },
      '&.atrule,&.rule': {
        col: atrule,
      },
      '&.atrule': {
        ...backgroundPadding,
        bg: lighterBg,
      },
      '&.selector': {
        color: selector,
      },
      '&.coord': {
        color: mono3,
      },
      '&.inserted': {
        color: 'green',
        '&.prefix': {
          ...backgroundPadding,
          bg: lighterBg,
        }
      },
      '&.deleted': {
        color: 'red',
        '&.prefix': {
          ...backgroundPadding,
          bg: lighterBg,
        }
      },
      '&.content': {
        color: hue2,
      },
      '&.code-snippet': {
        color: hue4,
      },
      '&.bold': {
        fw: 'bold',
      },
      '&.italic': {
        fs: 'italic',
      },
      '&.namespace': {
        op: 0.8,
      },
    },
  
    '.language-js,.language-javascript': {
      '.token': {
        '&.keyword': {
          '&[text=var],&[text=with]': redSquiggly,
        },
        '&.function': {
          '&[text=eval],&[text=alert]': redSquiggly,
        },
      },
    },
  
    '.language-css': {
      '.token': {
        '&.property': {
          col: mono3,
        },
      },
    },
  };
};
