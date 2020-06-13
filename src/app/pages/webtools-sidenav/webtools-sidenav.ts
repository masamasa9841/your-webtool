import { Component, NgModule, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { WebtoolsHeaderModule } from '../webtools-page-header/webtools-page-header';
import { Anagram, AnagramModule, StringGenerator, StringGeneratorModule } from 'webtools/index';
import { WEB_TOOLS } from 'src/config';

@Component({
  selector: 'app-webtools-sidenav',
  templateUrl: './webtools-sidenav.html',
  styleUrls: ['./webtools-sidenav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenav implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}

const anagram = WEB_TOOLS.find((tool) => tool.name === 'anagram');
const stringGenerator = WEB_TOOLS.find((tool) => tool.name === 'string-generator');

const routes: Routes = [
  {
    path: '',
    component: ComponentSidenav,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: anagram.name,
        component: Anagram,
        data: {
          description: anagram.description,
          keywords: anagram.keywords,
          url: anagram.url,
        },
      },
      {
        path: stringGenerator.name,
        component: StringGenerator,
        data: {
          description: stringGenerator.description,
          keywords: stringGenerator.keywords,
          url: stringGenerator.url,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    WebtoolsHeaderModule,
    AnagramModule,
    StringGeneratorModule,
    RouterModule.forChild(routes),
  ],
  exports: [ComponentSidenav],
  declarations: [ComponentSidenav],
  providers: [],
})
export class ComponentSidenavModule {}
