import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromTodo from '../todo.actions';
import { AppState } from 'src/app/app.reducer';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}
  agregarTodo() {
    const accion = new fromTodo.AgregaTodoAction(this.txtInput.value);
    console.log(accion);
    this.store.dispatch(accion);
    this.txtInput.setValue('');
  }
}
