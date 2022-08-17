import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listTodos: Todo[] = [];
  // filtro: filtrosValidos;
  constructor() {}

  ngOnInit(): void {}
}
