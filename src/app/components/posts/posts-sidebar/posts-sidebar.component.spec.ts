import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSidebarComponent } from './posts-sidebar.component';

describe('PostsSidebarComponent', () => {
  let component: PostsSidebarComponent;
  let fixture: ComponentFixture<PostsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
