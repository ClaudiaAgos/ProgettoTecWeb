import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifdeleComponent } from './modifdele.component';

describe('ModifdeleComponent', () => {
  let component: ModifdeleComponent;
  let fixture: ComponentFixture<ModifdeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifdeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifdeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
