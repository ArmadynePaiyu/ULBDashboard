import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesDashComponent } from './phases-dash.component';

describe('PhasesDashComponent', () => {
  let component: PhasesDashComponent;
  let fixture: ComponentFixture<PhasesDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasesDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
