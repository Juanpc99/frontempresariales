import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDestinosComponent } from './tipo-destinos.component';

describe('TipoDestinosComponent', () => {
  let component: TipoDestinosComponent;
  let fixture: ComponentFixture<TipoDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDestinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
