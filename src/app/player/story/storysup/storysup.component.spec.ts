import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorysupComponent } from './storysup.component';

describe('StorysupComponent', () => {
  let component: StorysupComponent;
  let fixture: ComponentFixture<StorysupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorysupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorysupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
