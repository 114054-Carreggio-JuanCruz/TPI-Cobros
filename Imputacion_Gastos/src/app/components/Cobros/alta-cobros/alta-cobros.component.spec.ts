import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCobrosComponent } from './alta-cobros.component';

describe('AltaCobrosComponent', () => {
  let component: AltaCobrosComponent;
  let fixture: ComponentFixture<AltaCobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaCobrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
