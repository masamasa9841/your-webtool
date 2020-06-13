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
  {
    name: 'string-generator',
    title: '指定文字列生成',
    description: '指定文字列を生成します。',
    keywords: 'string, 文字列, 生成, 指定, 境界値',
    url: 'http://localhost:4200/tools/string-generator',
  },
  {
    name: 'tree',
    title: 'tree生成',
    description: 'treeコマンドのweb版です。資料作成にお使いください。',
    keywords: 'tree, コマンド, web, 生成',
    url: 'http://localhost:4200/tools/tree',
  },
  {
    name: 'obj-beautifier',
    title: 'Object整形ツール',
    description: 'Objectを整形します。並び替えもできます。',
    keywords: 'Object, obj, 整形, 並び替え',
    url: 'http://localhost:4200/tools/obj-beatufier',
  },
];
