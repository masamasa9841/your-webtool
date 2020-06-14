import beautify from 'js-beautify';
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

@Component({
  selector: 'app-obj-beautifier',
  templateUrl: './obj-beautifier.component.html',
  styleUrls: ['./obj-beautifier.component.scss'],
})
export class ObjBeautifierComponent implements OnInit {
  inputObj: string = '{"key02": "hoge", "key01": "fuga"}';
  radioSelectedValue: string = '2';

  constructor(public _componentPageTitle: ComponentPageTitle, { webTools }: AppConfig) {
    this._componentPageTitle.title = webTools.find((tool) => tool.name === 'obj-beautifier')?.title;
  }

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
  exports: [ObjBeautifierComponent],
  declarations: [ObjBeautifierComponent],
  providers: [],
})
export class ObjBeautifierModule {}
