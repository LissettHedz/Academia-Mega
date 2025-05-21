import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "Esto es un ejemplo de ngModel";
  contenido = "Card que vamos a estar trabajando"
  botonText = "Ver más..."
  img = "https://static.wikia.nocookie.net/eswikia/images/5/58/Super_Mario_Bros.png/revision/latest/scale-to-width-down/430?cb=20160806233906" + Math.random()
  imgMegacable = "https://wradio.com.mx/resizer/v2/CCCWHRFUE5LANCWSHAD2CYBPPU.jpg?auth=d15c0e7da0ef2108c4388838cefdeb5a04bec62ee301842f93fdce87e3e26fa2&width=768&height=576&quality=70&smart=true"

  nombre = "Lissette"

  mostrarAlerta(){
    alert("Holaa!!!");
  }
}