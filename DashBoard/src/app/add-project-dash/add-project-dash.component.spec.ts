import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDashComponent } from './add-project-dash.component';

describe('AddProjectDashComponent', () => {
  let component: AddProjectDashComponent;
  let fixture: ComponentFixture<AddProjectDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
