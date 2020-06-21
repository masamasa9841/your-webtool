import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ComponentPageTitle {
  private _title = '';
  private _originalTitle = 'your webtool';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | ${this._originalTitle}`;
    } else {
      title = this._originalTitle;
    }
    this.bodyTitle.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });
  }

  constructor(private bodyTitle: Title, private meta: Meta) {}
}
