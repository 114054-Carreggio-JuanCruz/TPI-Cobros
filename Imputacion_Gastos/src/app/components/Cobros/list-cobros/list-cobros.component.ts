import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cobros',
  standalone: true,
  imports: [],
  templateUrl: './list-cobros.component.html',
  styleUrl: './list-cobros.component.css'
})
export class ListCobrosComponent {
  //cargos: Cargo[] = [];

  //constructor(private cargoService: CargoService) {}

  ngOnInit() {
    this.loadCargos();
  }

  loadCargos() {
    // this.cargoService.getCargos().subscribe(
    //   (data) => this.cargos = data
    // );
  }

  // editCargo(cargo: Cargo) {
  // }

  // deleteCargo(cargo: Cargo) {
  // }
}
