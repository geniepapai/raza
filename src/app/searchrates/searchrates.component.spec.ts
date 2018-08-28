import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchratesComponent } from './searchrates.component';

describe('SearchratesComponent', () => {
  let component: SearchratesComponent;
  let fixture: ComponentFixture<SearchratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
