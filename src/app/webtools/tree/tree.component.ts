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
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['tree.component.scss'],
})
export class TreeComponent implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle, { webTools }: AppConfig) {
    this._componentPageTitle.title = webTools.find((tool) => tool.name === 'tree')?.title;
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
  exports: [TreeComponent],
  declarations: [TreeComponent],
  providers: [],
})
export class TreeModule {}
