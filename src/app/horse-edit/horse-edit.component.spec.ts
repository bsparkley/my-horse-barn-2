import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseEditComponent } from './horse-edit.component';

describe('HorseEditComponent', () => {
  let component: HorseEditComponent;
  let fixture: ComponentFixture<HorseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
