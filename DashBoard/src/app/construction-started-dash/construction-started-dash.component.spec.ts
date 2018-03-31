import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionStartedDashComponent } from './construction-started-dash.component';

describe('ConstructionStartedDashComponent', () => {
  let component: ConstructionStartedDashComponent;
  let fixture: ComponentFixture<ConstructionStartedDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionStartedDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionStartedDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
