import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

interface Configuration {
  resourceServerA: string;
  resourceServerB: string;
  stage: string;
}

@Injectable({providedIn: 'root'})
export class ConfigurationService {

  private readonly BACKEND_URL = 'http://localhost:3000';
  private configuration$: Observable<Configuration>;

  constructor(private http: HttpClient) {
  }

  public loadConfigurations(): any {
    if (!this.configuration$) {
      this.configuration$ = this.http.get<Configuration>(`${this.BACKEND_URL}/configuration`).pipe(
        shareReplay(1)
      );
    }
    return this.configuration$;
  }

}
