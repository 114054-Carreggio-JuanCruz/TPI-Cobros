import { Component } from '@angular/core';

@Component({
  selector: 'app-alta-cobros',
  standalone: true,
  imports: [],
  templateUrl: './alta-cobros.component.html',
  styleUrl: './alta-cobros.component.css'
})
export class AltaCobrosComponent {
  //cargo: Cargo = {};

  //constructor(private cargoService: CargoService, private router: Router) {}

  onSubmit() {
    // this.cargoService.createCargo(this.cargo).subscribe(
    //   () => {
    //     // Navigate back to list after successful creation
    //     this.router.navigate(['/cargos']);
    //   },
    //   error => {
    //     // Handle error
    //     console.error('Error creating cargo', error);
    //   }
    // );
  }

  onCancel() {
    //this.router.navigate(['/cargos']);
  }
}
