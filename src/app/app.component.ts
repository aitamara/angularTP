import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //balise du component pour le html qui renvoi a cette partie et qui doit etre unique
  templateUrl: './app.component.html', // l'url du component
  styleUrls: ['./app.component.scss'] //ficier de style
})
export class AppComponent {
  title = 'Formulaire';
}
