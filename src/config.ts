export interface WebTool {
  /** 識別用 */
  name: string;
  /** title */
  title: string;
  /** home description */
  homeDescription: string;
  /** For SEO description */
  description: string;
  /** For SEO keywords */
  keywords: string;
  /** For SEO url */
  url: string;
}

export const WEB_TOOLS: WebTool[] = [
  {
    name: 'anagram',
    title: 'アナグラム全パターン作成',
    homeDescription: '文字列から全パターンのアナグラムを作成します。',
    description:
      '文字列から全パターンのアナグラム(順列)を作成します。文字が多すぎると処理に時間がかかるため、8文字までとします',
    keywords: 'anagram, アナグラム, 順列, 全パターン, 作成',
    url: 'https://your-webtool.app/tools/anagram',
  },
  {
    name: 'string-generator',
    title: '指定文字列生成',
    homeDescription: '指定文字列を生成します。',
    description: '指定文字列を生成します。境界値分析など様々なテストにお使いください。',
    keywords: '文字列, 指定, 境界値',
    url: 'https://your-webtool.app/tools/string-generator',
  },
  {
    name: 'obj-beautifier',
    title: 'Object整形ツール',
    homeDescription: 'Objectを整形します。並び替えもできます。',
    description: 'Object(JSON)をbeautifyを使って整形します。Objectの並び替えもできます。',
    keywords: 'Object, obj, 整形, 並び替え',
    url: 'https://your-webtool.app/tools/obj-beatufier',
  },
  {
    name: 'tree',
    title: 'tree生成',
    homeDescription: 'treeコマンドのweb版です。資料作成等にお使いください。',
    description: 'treeコマンドのweb版です。資料作成やフォルダ構成を考えるときにお使いください。',
    keywords: 'tree, web, 生成',
    url: 'https://your-webtool.app/tools/tree',
  },
];
