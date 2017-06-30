import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTwoChildComponent } from './state-two-child.component';

describe('StateTwoChildComponent', () => {
  let component: StateTwoChildComponent;
  let fixture: ComponentFixture<StateTwoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTwoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
