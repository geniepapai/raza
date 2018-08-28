import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageuflowSignComponent } from './homepageuflow-sign.component';

describe('HomepageuflowSignComponent', () => {
  let component: HomepageuflowSignComponent;
  let fixture: ComponentFixture<HomepageuflowSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageuflowSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageuflowSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
