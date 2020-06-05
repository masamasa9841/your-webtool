import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage implements OnInit {
  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
  constructor(public _componentPageTitle: ComponentPageTitle) {}
}

const routes: Routes = [{ path: '', component: Homepage }];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, CommonModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
