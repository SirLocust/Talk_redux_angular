export class Todo {
  private id: number;
  private texto: String;
  private completado: boolean;

  constructor(texto: String) {
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    this.completado = false;
    this.id = Math.random();
  }

  copyTodo(): Todo {
    const todo = new Todo(this.texto);
    todo.setCompletado(this.completado);
    todo.setId(this.id);
    return todo;
  }
  getTexto(): String {
    return this.texto;
  }
  setTexto(texto: String): void {
    this.texto = texto;
  }

  getCompletado(): boolean {
    return this.completado;
  }

  setCompletado(completado: boolean): void {
    this.completado = completado;
  }

  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
}
