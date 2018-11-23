import { Injectable } from '@angular/core';
import { RestEntity } from '../models/rest-entity.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiInfo: RestEntity;

  constructor() { }
}
