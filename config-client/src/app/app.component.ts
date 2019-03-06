import {Component} from '@angular/core';
import {ConfigurationService} from './configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'config-client';

  constructor(private configurationService: ConfigurationService) {
    this.configurationService.loadConfigurations().subscribe(e => console.log('Got config', e));
  }
}
