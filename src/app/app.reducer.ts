import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.new.reducer';
import { filtrosValidos } from './todo/filter/filter.actions';
import { filtroReducer } from './todo/filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const reducers: ActionReducerMap<AppState, any> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
