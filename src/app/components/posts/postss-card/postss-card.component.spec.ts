import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostssCardComponent } from './postss-card.component';

describe('PostssCardComponent', () => {
  let component: PostssCardComponent;
  let fixture: ComponentFixture<PostssCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostssCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostssCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
