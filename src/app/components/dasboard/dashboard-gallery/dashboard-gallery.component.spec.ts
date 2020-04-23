import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGalleryComponent } from './dashboard-gallery.component';

describe('DashboardGalleryComponent', () => {
  let component: DashboardGalleryComponent;
  let fixture: ComponentFixture<DashboardGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
