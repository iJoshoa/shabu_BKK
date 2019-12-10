import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopshabuComponent } from './topshabu.component';

describe('TopshabuComponent', () => {
  let component: TopshabuComponent;
  let fixture: ComponentFixture<TopshabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopshabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopshabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
