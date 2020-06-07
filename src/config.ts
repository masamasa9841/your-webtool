export interface WebTool {
  name: string;
  title: string;
  description: string;
  keywords: string;
  url: string;
}

export const WEB_TOOLS: WebTool[] = [
  {
    name: 'anagram',
    title: 'アナグラム全パターン作成',
    description: '文字列から全パターンのアナグラムを作成します。',
    keywords: 'anagram, アナグラム, 順列, 全パターン, 作成',
    url: 'http://localhost:4200/tools/anagram',
  },
];
