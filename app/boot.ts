import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Logger} from './logger/logger.service'

bootstrap(AppComponent, [Logger]);
