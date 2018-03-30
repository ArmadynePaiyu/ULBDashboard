import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDashComponent } from './login-dash.component';

describe('LoginDashComponent', () => {
  let component: LoginDashComponent;
  let fixture: ComponentFixture<LoginDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
