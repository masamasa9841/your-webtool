import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ComponentPageTitle } from 'pages/page-title/page-title';
import { AddTagService } from 'shared/add-tag/add-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _componentPageTitle: ComponentPageTitle,
    private _addTagService: AddTagService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activeRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this._componentPageTitle.title = event['title'];
        this._addTagService.updateDescription(event['description']);
        this._addTagService.updateOgUrl(event['url']);
        this._addTagService.updateKeyWord(event['keywords']);
      });
  }
}
