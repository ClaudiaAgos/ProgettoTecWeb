import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreastoriaComponent } from './creastoria.component';

describe('CreastoriaComponent', () => {
  let component: CreastoriaComponent;
  let fixture: ComponentFixture<CreastoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreastoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreastoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
