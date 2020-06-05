import { Component, NgModule, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { WebtoolsHeaderModule } from '../webtools-page-header/webtools-page-header';
import { Anagram } from '../../webtools/anagram';

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

const routes: Routes = [
  {
    path: '',
    component: ComponentSidenav,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'anagram', component: Anagram },
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
    RouterModule.forChild(routes),
  ],
  exports: [ComponentSidenav],
  declarations: [ComponentSidenav],
  providers: [],
})
export class ComponentSidenavModule {}
