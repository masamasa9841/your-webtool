import { Component, OnInit, NgModule } from '@angular/core';
import { ComponentPageTitle } from 'src/app/pages/page-title/page-title';
import { AppConfig } from 'shared/app-config/app-config';

import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

interface StringOption {
  value: string;
  name: string;
}

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss'],
})
export class StringGenerator implements OnInit {
  stringOptions: StringOption[] = [
    {
      value: 'number',
      name: '数字',
    },
  ];
  optionSelectedValue: StringOption['name'] = 'number';
  radioSelectedValue: string = '1';
  textLength: number = 100;

  constructor(public _componentPageTitle: ComponentPageTitle, { webTools }: AppConfig) {
    this._componentPageTitle.title = webTools.find((tool) => tool.name === 'string-generator')?.title;
  }

  ngOnInit(): void {}

  /**
   * 文字列生成
   */
  getText() {
    if (this.textLength > 10000) this.textLength = 10000;
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const resultText = [...new Array(this.textLength)].map((_, i) => numberArray[i.toString().slice(-1)]).join('');
    return this.radioSelectedValue === '1' ? resultText : this.toFullWith(resultText);
  }

  /**
   * 全角に変換
   * @param str 文字列
   */
  private toFullWith(str: string) {
    return str.replace(/[A-Za-z0-9]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0xfee0));
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatFormFieldModule,
  ],
  exports: [StringGenerator],
  declarations: [StringGenerator],
  providers: [],
})
export class StringGeneratorModule {}
