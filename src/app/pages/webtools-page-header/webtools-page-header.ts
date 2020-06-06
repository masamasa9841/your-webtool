import { Component, NgModule } from '@angular/core';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'webtools-page-header',
  templateUrl: './webtools-page-header.html',
  styleUrls: ['./webtools-page-header.scss'],
})
export class WebtoolsPageHeader {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  getTitle() {
    return this._componentPageTitle.title;
  }
}

@NgModule({
  imports: [],
  exports: [WebtoolsPageHeader],
  declarations: [WebtoolsPageHeader],
})
export class WebtoolsHeaderModule {}
