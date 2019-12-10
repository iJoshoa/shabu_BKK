import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshabuComponent } from './allshabu.component';

describe('AllshabuComponent', () => {
  let component: AllshabuComponent;
  let fixture: ComponentFixture<AllshabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllshabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllshabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
