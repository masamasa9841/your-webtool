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

// beautify({ name: 'a' });

@Component({
  selector: 'app-obj-beautifier',
  templateUrl: './obj-beautifier.component.html',
  styleUrls: ['./obj-beautifier.component.scss'],
})
export class ObjBeautifierComponent implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle, { webTools }: AppConfig) {
    this._componentPageTitle.title = webTools.find((tool) => tool.name === 'obj-beautifier')?.title;
    console.log(beautify(JSON.stringify({ name: 'a', hoge: 'a' }), { indent_size: 2, space_in_empty_paren: true }));
  }

  ngOnInit(): void {}
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
