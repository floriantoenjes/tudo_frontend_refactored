import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestEntity } from '../models/rest-entity.model';

@Injectable({
  providedIn: 'root'
})
export class RestClientService extends HttpClient {

  public baseUri = environment.apiUrl;

  constructor(httpHandler: HttpHandler) {
    super(httpHandler);
  }

  getRestEntities<T extends RestEntity>(uri: string, selector: string): Observable<T[]> {
    return super.get<any>(`${environment.apiUrl}${uri}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      map(response => {
        const entities = response._embedded[selector] as T[];
        entities.forEach(entity => {
          entity.id = this.getEntityId(entity);
        });
        return entities;
      })
    );
  }

  getRestEntity<T extends RestEntity>(uri: string): Observable<T> {
    return super.get<T>(`${environment.apiUrl}${uri}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      map(entity => {
        entity.id = this.getEntityId(entity);
        return entity;
      })
    );
  }

  postRestEntity<T extends RestEntity>(uri: string, body: any): Observable<T> {
    return super.post<T>(`${environment.apiUrl}${uri}`, body,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    );
  }

  getEntityId(restEntity: RestEntity): number {
    const selfLink = restEntity._links.self.href;
    const linkParts = selfLink.split('/');

    if (linkParts[linkParts.length - 1].length === 0) {
      return +linkParts[linkParts.length - 2];
    } else {
      return +linkParts[linkParts.length - 1];
    }
  }
}
