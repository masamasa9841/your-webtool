import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
}

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss'],
})
export class Anagram implements OnInit {
  inputText: string = '12345';
  displayedColumns: string[] = ['position', 'name'];
  resultText: string[] = [];
  tabIndex = 0;
  textAreaText: string;
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  readonly maxInputLength = 8;
  readonly maxInputTableLength = 5;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.anagram(this.inputText);
  }

  changeTab(tab: MatTabChangeEvent) {
    this.tabIndex = tab.index;
    // text areaの時は何もしない
    if (!tab.index) return;
    // table表示になった時に上限の文字数までtrimする
    if (this.inputText.length > this.maxInputTableLength)
      this.inputText = this.inputText.slice(0, this.maxInputTableLength - this.inputText.length);
    this.anagram(this.inputText);
  }

  anagram(text: string) {
    this.resultText = this.permutation(text.split('')).reduce((pre, current) => {
      pre.push(current.join(''));
      return pre;
    }, []);
    this.textAreaText = this.resultText.reduce((pre, current) => {
      pre += `[${current}]   `;
      return pre;
    }, '');
    if (this.tabIndex) {
      this.dataSource = new MatTableDataSource<PeriodicElement>(
        this.resultText.map((text, i) => ({ position: i + 1, name: text }))
      );
      this.dataSource.sort = this.sort;
    }
  }

  /**
   * 順列生成(再帰)
   * @param array 一文字づつの配列
   * @returns 順列結果
   */
  private permutation(array: string[]): string[][] {
    let result = [];
    if (array.length === 1) {
      result.push(array);
      return result;
    }
    for (let i = 0; i < array.length; i++) {
      const firstElem = array.slice(i, i + 1);
      const restElem = [...array.slice(0, i), ...array.slice(i + 1)];
      let innerPermutations = this.permutation(restElem);
      for (let j = 0; j < innerPermutations.length; j++) {
        result.push([...firstElem, ...innerPermutations[j]]);
      }
    }
    return result;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    FormsModule,
    MatSortModule,
    MatTabsModule,
  ],
  exports: [Anagram],
  declarations: [Anagram],
  providers: [],
})
export class AnagramModule {}
