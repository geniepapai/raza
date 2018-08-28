import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMyaccountlistComponent } from './vn-myaccountlist.component';

describe('VnMyaccountlistComponent', () => {
  let component: VnMyaccountlistComponent;
  let fixture: ComponentFixture<VnMyaccountlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnMyaccountlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnMyaccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
