import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletopupComponent } from './mobiletopup.component';

describe('MobiletopupComponent', () => {
  let component: MobiletopupComponent;
  let fixture: ComponentFixture<MobiletopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiletopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiletopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
