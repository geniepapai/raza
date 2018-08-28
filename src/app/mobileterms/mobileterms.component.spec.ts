import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletermsComponent } from './mobileterms.component';

describe('MobiletermsComponent', () => {
  let component: MobiletermsComponent;
  let fixture: ComponentFixture<MobiletermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiletermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiletermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
