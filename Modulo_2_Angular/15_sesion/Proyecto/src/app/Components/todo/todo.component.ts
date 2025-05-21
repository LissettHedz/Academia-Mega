import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  nuevaTarea = "";

  tareas = [
    {texto: "Comer sano", completada: false},
    {texto: "Ir al gym", completada: true},
    {texto: "Estudiar angular", completada: true},
    {texto: "tomar mis medicamentos", completada: false},
    {texto: "Asistir a mis citas medicas", completada: true},
    {texto: "Pasear a Jagger", completada: true},
  ];

  agregarTareas(){
    if(this.nuevaTarea.trim()){
      this.tareas
      .push({texto: this.nuevaTarea, completada: false});
      this.nuevaTarea = "";
    }
  }

  limpiarTareas(){
    this.tareas = [];
  }

  toogleCompletar(index: number){
    this.tareas[index].completada = !this.tareas[index].completada;
  }
}
