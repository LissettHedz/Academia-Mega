import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "Ejemplo de ngModel";
  contenido = "Card que vamos a estar trabajando"
  botonText = "Conocer más..."
  img = "https://static.wikia.nocookie.net/eswikia/images/5/58/Super_Mario_Bros.png/revision/latest/scale-to-width-down/430?cb=20160806233906" + Math.random()


  nombre = "Lissette Hernandez"

  mostrarAlerta(){
    alert("Holaaa!");
  }
}