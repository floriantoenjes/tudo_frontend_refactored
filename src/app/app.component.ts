import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { RestClientService } from './shared/services/rest-client.service';
import { environment } from 'src/environments/environment';
import { RestEntity } from './shared/models/rest-entity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tudo-refactored';

  constructor(
    private apiService: ApiService,
    private http: RestClientService
  ) {}

  ngOnInit(): void {
    this.http.getRestEntity<RestEntity>(environment.apiUrl).subscribe(
      entity => this.apiService.apiInfo = entity
    );
  }
}
