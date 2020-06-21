import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AddTagService {
  constructor(private title: Title, private meta: Meta) {}

  updateOgUrl(url: string) {
    if (!url) url = 'https://your-webtool.app';
    this.meta.updateTag({ property: 'og:url', content: url });
  }

  updateDescription(desc: string) {
    if (!desc) desc = '便利なウェブツール集';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:description', content: desc });
  }

  updateKeyWord(keyWord: string) {
    if (!keyWord) keyWord = 'Web Tool, tool, ウェブツール, ツール';
    this.meta.updateTag({ name: 'keywords', content: keyWord });
  }
}
