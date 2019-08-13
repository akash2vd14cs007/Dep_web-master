import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentdisplayComponent } from './departmentdisplay.component';

describe('DepartmentdisplayComponent', () => {
  let component: DepartmentdisplayComponent;
  let fixture: ComponentFixture<DepartmentdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
