// reducer

import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';
import { ActionReducer, Action } from '@ngrx/store';

const estadoInicial: Todo[] = [];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.text);
      console.log(todo);
      return [...state, todo];
    default:
      return state;
  }
}
