import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaGastosComponent } from './alta-gastos.component';

describe('AltaGastosComponent', () => {
  let component: AltaGastosComponent;
  let fixture: ComponentFixture<AltaGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaGastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
