import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import {appRouterProviders} from './app.routes';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
//import {disableDeprecatedForms, provideForms} from '@angular/forms';

//bootstrap(AppComponent, [appRouterProviders]);
platformBrowserDynamic().bootstrapModule(AppModule);
