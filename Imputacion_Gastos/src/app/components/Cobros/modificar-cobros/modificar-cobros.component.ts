import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cobros',
  standalone: true,
  imports: [],
  templateUrl: './modificar-cobros.component.html',
  styleUrl: './modificar-cobros.component.css'
})
export class ModificarCobrosComponent {
  //cargo: Cargo = {};

  constructor(
    //private cargoService: CargoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // this.cargoService.getCargo(id).subscribe(
      //   cargo => this.cargo = cargo,
      //   error => console.error('Error fetching cargo', error)
      // );
    }
  }

  onSubmit() {
    // this.cargoService.updateCargo(this.cargo).subscribe(
    //   () => {
    //     this.router.navigate(['/cargos']);
    //   },
    //   error => {
    //     console.error('Error updating cargo', error);
    //   }
    // );
  }

  onCancel() {
    this.router.navigate(['/cargos']);
  }
}
