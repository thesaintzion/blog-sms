import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLayoutComponent } from './posts-layout.component';

describe('PostsLayoutComponent', () => {
  let component: PostsLayoutComponent;
  let fixture: ComponentFixture<PostsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
