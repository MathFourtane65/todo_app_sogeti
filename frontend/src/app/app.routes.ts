import { Routes } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { HomeComponent } from './home/home.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path :'todos', component: ListTodosComponent},
    { path : 'todos/create', component: CreateTodoComponent}
];
