import * as React from "react";
import { tokens } from "./util";
import type {Token} from "code-colors/lib";

const { createElement: h } = React;

const astToReact = (
  ast: Token,
  code: string,
  pos: number,
): [node: React.ReactNode, length: number] => {
  if (typeof ast === "number") return [code.slice(pos, pos + ast), ast];
  const [types, tokens] = ast;
  const children: React.ReactNode[] = [];
  const length = tokens.length;
  let nodeTextLength = 0;
  for (let i = 0; i < length; i++) {
    const token = tokens[i];
    const [node, len] = astToReact(token, code, pos + nodeTextLength);
    nodeTextLength += len;
    children.push(node);
  }
  const props = {
    className: "token " + types.join(" "),
  };
  const firstChild = children[0];
  if (children.length === 1 && typeof firstChild === 'string' && children.length <= 16) {
    props['text'] = firstChild;
    return [
      h('span', props, firstChild),
      nodeTextLength,
    ];
  } else {
    return [
      h('span', props, ...children),
      nodeTextLength,
    ];
  }
};

export interface ColorTokensProps {
  code: string;
  as?: string;
  lang?: string;
  prefix?: string;
  [key: string]: unknown;
}

export const ColorTokens: React.FC<ColorTokensProps> = ({
  code,
  lang,
  as = "code",
  ...rest
}) => {
  const [node, setNode] = React.useState<React.ReactNode | null>(null);

  const Tag = as as any;

  React.useEffect(() => {
    setNode(null);
    let cancelled = false;
    tokens(code, lang)
      .then((ast) => {
        if (!cancelled) {
          const [node] = astToReact(ast, code, 0);
          setNode(node);
        }
      })
      .catch((err) => {});
    return () => {
      cancelled = true;
    };
  }, [code]);

  return h(Tag, rest, node);
};
