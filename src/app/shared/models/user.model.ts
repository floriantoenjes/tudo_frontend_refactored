import { RestEntity } from './rest-entity.model';

export class User extends RestEntity {
  username: string;
  password: string;
  email: string;
}
