import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientegreenComponent } from './clientegreen.component';

describe('ClientegreenComponent', () => {
  let component: ClientegreenComponent;
  let fixture: ComponentFixture<ClientegreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientegreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientegreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
