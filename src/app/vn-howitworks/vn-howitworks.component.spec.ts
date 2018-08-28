import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnHowitworksComponent } from './vn-howitworks.component';

describe('VnHowitworksComponent', () => {
  let component: VnHowitworksComponent;
  let fixture: ComponentFixture<VnHowitworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnHowitworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnHowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
