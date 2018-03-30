import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDashComponent } from './sidebar-dash.component';

describe('SidebarDashComponent', () => {
  let component: SidebarDashComponent;
  let fixture: ComponentFixture<SidebarDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
