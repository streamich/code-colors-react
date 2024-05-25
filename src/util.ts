import { CodeColors } from "code-colors/lib/CodeColors";
import type { TokenNode } from "./types";

const bundle = "https://unpkg.com/code-colors@2.0.0/dist/bundle.js";

let __colors: CodeColors | null = null;
export const colors = (): CodeColors => {
  if (!__colors) __colors = new CodeColors(bundle);
  return __colors;
};

export const tokens = async (code: string, lang?: string): Promise<TokenNode> =>
  await colors().tokenize(code, lang);