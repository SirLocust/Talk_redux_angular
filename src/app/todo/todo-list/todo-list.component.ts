import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listTodos: Todo[] = [];
  // filtro: filtrosValidos;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state.todos);
      this.listTodos = state.todos;
    });
  }
}
