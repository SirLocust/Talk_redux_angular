import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';

export interface AppState {
  todos: Todo[];
}

export const reducers: ActionReducerMap<AppState, any> = {
  todos: todoReducer,
};
