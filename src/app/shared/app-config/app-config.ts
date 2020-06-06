import { Injectable } from '@angular/core';
import { WEB_TOOLS, WebTool } from '../../../config';

const appConfig: AppConfig = {
  webTools: WEB_TOOLS,
};

@Injectable({
  providedIn: 'root',
  useValue: appConfig,
})
export abstract class AppConfig {
  readonly webTools: WebTool[];
}
