import { Todo } from './model/todo.model';
import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.new.actions';
const estadoInicial: Todo[] = [];

export const todoReducer = createReducer(
  estadoInicial,
  on(todoActions.agregarTodo, (state, { text }) => {
    return [...state, new Todo(text)];
  })
);
