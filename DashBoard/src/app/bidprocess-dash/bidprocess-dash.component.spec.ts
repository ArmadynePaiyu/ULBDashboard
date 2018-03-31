import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidprocessDashComponent } from './bidprocess-dash.component';

describe('BidprocessDashComponent', () => {
  let component: BidprocessDashComponent;
  let fixture: ComponentFixture<BidprocessDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidprocessDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidprocessDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
