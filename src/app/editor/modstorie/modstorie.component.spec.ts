import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModstorieComponent } from './modstorie.component';

describe('ModstorieComponent', () => {
  let component: ModstorieComponent;
  let fixture: ComponentFixture<ModstorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModstorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModstorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
