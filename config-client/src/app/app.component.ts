import {Component} from '@angular/core';
import {ConfigurationService} from './configuration.service';
import {interval} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';
import {ConfigAssetLoaderService} from './config-asset-loader.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'config-client';

  constructor(private configurationService: ConfigurationService, private configAssetsLoader: ConfigAssetLoaderService) {
    /*
    interval(3000).pipe(
      take(3),
      switchMap(() => this.configurationService.loadConfigurations())
    ).subscribe(e => console.log('Refetched config', e));
    */

    interval(3000).pipe(
      take(3),
      switchMap(() => this.configAssetsLoader.loadConfigurations())
    ).subscribe(e => console.log('Refetched config from assets', e));

    console.log('Environment', environment.testEnvironment);
  }
}
