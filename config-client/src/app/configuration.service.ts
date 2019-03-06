import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Configuration {
  urlResourceServerA: string;
  urlResourceServerB: string;
  stage: string;
}

@Injectable({providedIn: 'root'})
export class ConfigurationService {

  private readonly BACKEND_URL = 'http://localhost:3000';
  private configuration$: Observable<Configuration>;

  constructor(private http: HttpClient) {
  }

  public loadConfigurations(): any {
    if (this.configuration$) {
      return this.configuration$;
    }
    return this.configuration$ = this.http.get<Configuration>(`${this.BACKEND_URL}/configuration`);
  }

}
