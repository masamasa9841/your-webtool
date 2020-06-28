import beautify from 'js-beautify';
import { Component, OnInit, NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-obj-beautifier',
  templateUrl: './obj-beautifier.component.html',
  styleUrls: ['./obj-beautifier.component.scss'],
})
export class ObjBeautifierComponent implements OnInit {
  inputObj: string = '{"key02": "second", "key01": "first"}';
  radioSelectedValue: string = '2';

  constructor() {}

  ngOnInit(): void {}

  getOutputObj(): string {
    if (this.radioSelectedValue === '2') return beautify(this.inputObj);
    try {
      const obj = JSON.parse(this.inputObj);
      return beautify(JSON.stringify(this.sortObject(obj)));
    } catch {
      return beautify(this.inputObj);
    }
  }

  /**
   * Objectをkey名でソートする(再起処理)
   * @param src object
   */
  private sortObject(src: any) {
    if (!(src instanceof Object && Object.prototype.toString.call(src) === '[object Object]')) return src;
    return Object.fromEntries(
      Object.entries(src)
        .map(([key, value]) => [key, this.sortObject(value)])
        .sort()
    );
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, MatInputModule, MatRadioModule, MatIconModule, MatExpansionModule],
  exports: [ObjBeautifierComponent],
  declarations: [ObjBeautifierComponent],
  providers: [],
})
export class ObjBeautifierModule {}
