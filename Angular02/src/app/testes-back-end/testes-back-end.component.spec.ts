import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesBackEndComponent } from './testes-back-end.component';

describe('TestesBackEndComponent', () => {
  let component: TestesBackEndComponent;
  let fixture: ComponentFixture<TestesBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesBackEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestesBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
