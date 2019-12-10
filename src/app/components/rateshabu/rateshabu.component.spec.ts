import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateshabuComponent } from './rateshabu.component';

describe('RateshabuComponent', () => {
  let component: RateshabuComponent;
  let fixture: ComponentFixture<RateshabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateshabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateshabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
