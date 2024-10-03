import { AltaCobrosComponent } from './components/Cobros/alta-cobros/alta-cobros.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListCobrosComponent } from './components/Cobros/list-cobros/list-cobros.component';
import { ModificarCobrosComponent } from './components/Cobros/modificar-cobros/modificar-cobros.component';
import { BorrarItemComponent } from './components/borrar-item/borrar-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AltaCobrosComponent, ListCobrosComponent, ModificarCobrosComponent, BorrarItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Imputacion_Gastos';
}
