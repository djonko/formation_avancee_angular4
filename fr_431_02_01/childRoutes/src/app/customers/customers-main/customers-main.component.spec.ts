import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersMainComponent } from './customers-main.component';

describe('CustomersMainComponent', () => {
  let component: CustomersMainComponent;
  let fixture: ComponentFixture<CustomersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
