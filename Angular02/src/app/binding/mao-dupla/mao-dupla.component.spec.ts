import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaoDuplaComponent } from './mao-dupla.component';

describe('MaoDuplaComponent', () => {
  let component: MaoDuplaComponent;
  let fixture: ComponentFixture<MaoDuplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaoDuplaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaoDuplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
