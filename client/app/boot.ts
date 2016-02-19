import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ComponentRef} from 'angular2/core'
import {AppComponent} from './app.component'
import {Logger} from './logger/logger.service'
import { appInjector } from './common/app.injector';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, Logger]).then((appRef: ComponentRef) => {
  appInjector(appRef.injector);
});
