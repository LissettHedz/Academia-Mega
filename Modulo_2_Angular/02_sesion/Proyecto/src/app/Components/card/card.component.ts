import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "Esto es una card";
  contenido = "Card que vamos a estar trabajando"
  botonText = "Ver más..."
  img = "https://static.wikia.nocookie.net/eswikia/images/5/58/Super_Mario_Bros.png/revision/latest/scale-to-width-down/430?cb=20160806233906" + Math.random()
}
