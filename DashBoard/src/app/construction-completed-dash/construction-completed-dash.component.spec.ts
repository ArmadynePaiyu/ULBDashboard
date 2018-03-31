import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionCompletedDashComponent } from './construction-completed-dash.component';

describe('ConstructionCompletedDashComponent', () => {
  let component: ConstructionCompletedDashComponent;
  let fixture: ComponentFixture<ConstructionCompletedDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionCompletedDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionCompletedDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
