import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPhaseDetailDashComponent } from './project-phase-detail-dash.component';

describe('ProjectPhaseDetailDashComponent', () => {
  let component: ProjectPhaseDetailDashComponent;
  let fixture: ComponentFixture<ProjectPhaseDetailDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPhaseDetailDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPhaseDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
