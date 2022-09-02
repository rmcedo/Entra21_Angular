import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberDadosComponent } from './receber-dados.component';

describe('ReceberDadosComponent', () => {
  let component: ReceberDadosComponent;
  let fixture: ComponentFixture<ReceberDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceberDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceberDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
