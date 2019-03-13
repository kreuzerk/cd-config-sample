import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {ConfigAssetLoaderService} from './config-asset-loader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigurationService) => () => configService.loadConfigurations().toPromise(),
      deps: [ConfigurationService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (configAssetService: ConfigAssetLoaderService) => () => configAssetService.loadConfigurations().toPromise(),
      deps: [ConfigAssetLoaderService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
