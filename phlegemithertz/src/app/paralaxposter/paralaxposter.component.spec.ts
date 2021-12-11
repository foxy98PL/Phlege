import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxposterComponent } from './paralaxposter.component';

describe('ParalaxposterComponent', () => {
  let component: ParalaxposterComponent;
  let fixture: ComponentFixture<ParalaxposterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParalaxposterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
