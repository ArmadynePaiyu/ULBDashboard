import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDashComponent } from './modal-dash.component';

describe('ModalDashComponent', () => {
  let component: ModalDashComponent;
  let fixture: ComponentFixture<ModalDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
