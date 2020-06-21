import { Component, NgModule, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { WebtoolsHeaderModule } from '../webtools-page-header/webtools-page-header';
import {
  Anagram,
  AnagramModule,
  StringGenerator,
  StringGeneratorModule,
  ObjBeautifierComponent,
  ObjBeautifierModule,
  TreeComponent,
  TreeModule,
} from 'webtools/index';
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
const tree = WEB_TOOLS.find((tool) => tool.name === 'tree');
const stringGenerator = WEB_TOOLS.find((tool) => tool.name === 'string-generator');
const objBeautifier = WEB_TOOLS.find((tool) => tool.name === 'obj-beautifier');

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
          title: anagram.title,
          description: anagram.description,
          keywords: anagram.keywords,
          url: anagram.url,
        },
      },
      {
        path: tree.name,
        component: TreeComponent,
        data: {
          title: tree.title,
          description: tree.description,
          keywords: tree.keywords,
          url: tree.url,
        },
      },
      {
        path: stringGenerator.name,
        component: StringGenerator,
        data: {
          title: stringGenerator.title,
          description: stringGenerator.description,
          keywords: stringGenerator.keywords,
          url: stringGenerator.url,
        },
      },
      {
        path: objBeautifier.name,
        component: ObjBeautifierComponent,
        data: {
          title: objBeautifier.title,
          description: objBeautifier.description,
          keywords: objBeautifier.keywords,
          url: objBeautifier.url,
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
    ObjBeautifierModule,
    TreeModule,
    RouterModule.forChild(routes),
  ],
  exports: [ComponentSidenav],
  declarations: [ComponentSidenav],
  providers: [],
})
export class ComponentSidenavModule {}
