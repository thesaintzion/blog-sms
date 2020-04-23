import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardYoutubeComponent } from './dashboard-youtube.component';

describe('DashboardYoutubeComponent', () => {
  let component: DashboardYoutubeComponent;
  let fixture: ComponentFixture<DashboardYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
