import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-borrar-item',
  standalone: true,
  imports: [],
  templateUrl: './borrar-item.component.html',
  styleUrl: './borrar-item.component.css'
})
export class BorrarItemComponent {
  //@Input() cargoId: string;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onClose() {
    this.cancel.emit();
  }
}
