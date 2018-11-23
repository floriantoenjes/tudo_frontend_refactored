import { RestEntity } from './rest-entity.model';

export class User extends RestEntity {
  id: number;
  username: string;
  password: string;
  email: string;
}
