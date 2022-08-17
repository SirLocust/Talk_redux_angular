import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: Todo;
  @ViewChild('txtInputFisico')
  txtInputFisico!: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;
  editandoTodo: boolean = false;
  constructor() {
    this.chkField = new FormControl(this.todoItem.getCompletado());
    this.txtInput = new FormControl(
      this.todoItem.getTexto(),
      Validators.required
    );
  }
  ngOnInit(): void {}

  editarTodo() {}

  terminarEdicion() {}
  borrarTodo() {}
}
