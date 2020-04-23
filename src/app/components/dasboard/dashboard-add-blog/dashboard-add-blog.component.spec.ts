import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddBlogComponent } from './dashboard-add-blog.component';

describe('DashboardAddBlogComponent', () => {
  let component: DashboardAddBlogComponent;
  let fixture: ComponentFixture<DashboardAddBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
