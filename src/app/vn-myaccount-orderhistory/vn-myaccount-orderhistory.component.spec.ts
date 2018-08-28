import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMyaccountOrderhistoryComponent } from './vn-myaccount-orderhistory.component';

describe('VnMyaccountOrderhistoryComponent', () => {
  let component: VnMyaccountOrderhistoryComponent;
  let fixture: ComponentFixture<VnMyaccountOrderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnMyaccountOrderhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnMyaccountOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
