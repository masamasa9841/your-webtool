import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AppConfig } from 'shared/app-config/app-config';
import { WebTool } from 'src/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavBar implements OnInit {
  webTools: WebTool[];
  constructor({ webTools }: AppConfig) {
    this.webTools = webTools;
  }

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  exports: [NavBar],
  declarations: [NavBar],
  providers: [],
})
export class NavBarModule {}
