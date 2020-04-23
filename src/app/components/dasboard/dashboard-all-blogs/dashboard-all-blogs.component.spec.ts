import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllBlogsComponent } from './dashboard-all-blogs.component';

describe('DashboardAllBlogsComponent', () => {
  let component: DashboardAllBlogsComponent;
  let fixture: ComponentFixture<DashboardAllBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAllBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAllBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
