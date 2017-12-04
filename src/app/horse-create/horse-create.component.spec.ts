import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseCreateComponent } from './horse-create.component';

describe('HorseCreateComponent', () => {
  let component: HorseCreateComponent;
  let fixture: ComponentFixture<HorseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
