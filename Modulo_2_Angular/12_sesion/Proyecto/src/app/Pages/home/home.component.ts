import { Component } from '@angular/core';
import { HijoComponent } from '../../Components/hijo/hijo.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Simulación de API
  usuarios = [
    {nombre: "Lissette", edad: 35, profesion: "ING"},
    {nombre: "Diana", edad: 29, profesion: "Maestra"},
    {nombre: "Patricia", edad: 22, profesion: "Arquitecta"},
    {nombre: "Carolina", edad: 30, profesion: "Cirujana"},
  ];

  mensajeDelHijo = "";
  recibiMensaje(mensaje: String){
    this.mensajeDelHijo = mensaje

  }


}
