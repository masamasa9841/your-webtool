export interface WebTool {
  name: string;
  title: string;
  description: string;
}

export const WEB_TOOLS: WebTool[] = [
  { name: 'anagram', title: 'アナグラム全パターン作成', description: '文字列から全パターンのアナグラムを作成します。' },
];
