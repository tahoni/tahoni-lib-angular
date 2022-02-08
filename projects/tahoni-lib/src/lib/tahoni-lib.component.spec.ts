import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahoniLibComponent } from './tahoni-lib.component';

describe('TahoniLibComponent', () => {
  let component: TahoniLibComponent;
  let fixture: ComponentFixture<TahoniLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TahoniLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TahoniLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
