import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-component',
  imports: [],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.css',
})
export class InicioComponent {
  patente:string = "";
  marca:number = 0;
  modelo:string = "";
  color:string = "";
}
