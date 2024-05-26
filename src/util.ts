import { CodeColors } from "code-colors/lib/CodeColors";

const bundle = "https://unpkg.com/code-colors@2.2.0/dist/bundle.js";

let __colors: CodeColors | null = null;
export const colors = (): CodeColors => {
  if (!__colors) __colors = new CodeColors(bundle);
  return __colors;
};

export const tokens = async (code: string, lang?: string) => {
  // await new Promise(r => setTimeout(r, 1000));
  return await colors().tokenize(code, lang);
};
