import { Component, OnInit, NgModule, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['tree.component.scss'],
})
export class TreeComponent implements OnInit, AfterViewInit, OnDestroy {
  private _el: HTMLElement;
  private _subscription: Subscription;
  inputText: string = 'tree\n\tfolder\n\t\tfolder';

  constructor(element: ElementRef) {
    this._el = element.nativeElement;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const targetElement = this._el.querySelector('#input');
    this._subscription = fromEvent(targetElement, 'keydown').subscribe((event: KeyboardEvent) => {
      // tab意外は即リターン
      if (event.keyCode !== 9) return;
      event.preventDefault();
      const cursorPosition = (targetElement as any).selectionStart;
      const cursorLeft = (targetElement as any).value.substr(0, cursorPosition);
      const cursorRight = (targetElement as any).value.substr(cursorPosition, (targetElement as any).value.length);
      (targetElement as any).value = `${cursorLeft}\t${cursorRight}`;
      (targetElement as any).selectionEnd = cursorPosition + 1;
    });
  }

  /**
   * tree作成
   */
  getTree(): string {
    let maxDepth = 0;
    let list = [];
    let rows = [];
    this.inputText.split('\n').forEach((line) => {
      const m = line.match(/^(\t+)?(.+)$/);
      const depth = m && m[1] ? m[1].length : 0;
      const text = m && m[2] ? m[2] : '';
      // 行のパース
      list.push({ depth, text });
      // 最深の階層を調べる
      maxDepth = Math.max(maxDepth, depth);
    });
    // 初期化
    const open = [...Array(maxDepth)].map(() => false);
    list.forEach((r, i) => {
      // ルート
      if (!r.depth) return rows.push(r.text);

      // とりあえずクローズ？
      open[r.depth] = false;

      // 閉じるかどうかのチェック
      // 同じ階層の物が以降の行で、より浅い階層の行より前に無い場合閉じる
      var checked = false;

      list.slice(i + 1).map((s) => {
        if (checked) return;
        if (s.depth < r.depth) {
          checked = true;
          return;
        }
        if (s.depth === r.depth) {
          open[r.depth] = true;
          checked = true;
          return;
        }
      });

      // 罫線を組み立てて結果行を生成していく
      // open されている親は｜で表現、そうでないなら空白
      var line = [];

      [...Array(r.depth).keys()].forEach((_, i) => {
        if (i === 0) return;
        if (open[i]) line.push('│');
        else line.push('　');
      });

      line.push(open[r.depth] ? '├' : '└');
      line.push(r.text);
      rows.push(line.join(' '));
    });

    return rows.join('\n');
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}

@NgModule({
  imports: [CommonModule, MatInputModule, FormsModule, MatFormFieldModule, MatIconModule, MatExpansionModule],
  exports: [TreeComponent],
  declarations: [TreeComponent],
  providers: [],
})
export class TreeModule {}
