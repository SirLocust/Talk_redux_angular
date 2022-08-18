import { createAction, props } from '@ngrx/store';

export const agregarTodo = createAction(
  '[TODO ] Agregar Todo',
  props<{ text: string }>()
);
