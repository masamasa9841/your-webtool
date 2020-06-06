import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppConfig } from 'shared/app-config/app-config';
import { WebTool } from 'src/config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage implements OnInit {
  webTools: WebTool[];
  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
  constructor(public _componentPageTitle: ComponentPageTitle, { webTools }: AppConfig) {
    this.webTools = webTools;
  }
}

const routes: Routes = [{ path: '', component: Homepage }];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, CommonModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
