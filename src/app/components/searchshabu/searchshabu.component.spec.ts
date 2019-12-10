import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchshabuComponent } from './searchshabu.component';

describe('SearchshabuComponent', () => {
  let component: SearchshabuComponent;
  let fixture: ComponentFixture<SearchshabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchshabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchshabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
