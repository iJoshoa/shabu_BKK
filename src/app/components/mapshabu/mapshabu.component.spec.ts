import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapshabuComponent } from './mapshabu.component';

describe('MapshabuComponent', () => {
  let component: MapshabuComponent;
  let fixture: ComponentFixture<MapshabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapshabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapshabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
