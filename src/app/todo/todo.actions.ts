import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO ] Agregar Todo';

export class AgregaTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public text: String) {}
}

export type Acciones = AgregaTodoAction;
