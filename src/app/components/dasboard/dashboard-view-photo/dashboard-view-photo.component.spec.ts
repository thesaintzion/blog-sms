import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewPhotoComponent } from './dashboard-view-photo.component';

describe('DashboardViewPhotoComponent', () => {
  let component: DashboardViewPhotoComponent;
  let fixture: ComponentFixture<DashboardViewPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
