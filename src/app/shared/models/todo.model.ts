import { RestEntity } from './rest-entity.model';
import { TodoList } from './todo-list.model';
import { User } from './user.model';

export class Todo extends RestEntity {
    name: string;
    description: string;
    createdAt: Date;
    dueDate: Date;
    tags: string[];
    location: null;
    id: number;
    priority: number;
    todoList: TodoList;
    assignedUsers: User[];
    progress: number;
    completed: boolean;
    completedAt: Date;
    lastUpdated: Date;
}
