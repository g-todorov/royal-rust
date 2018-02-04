import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuBreadcrumbComponent } from './hamburger-menu-breadcrumb.component';

describe('HamburgerMenuBreadcrumbComponent', () => {
  let component: HamburgerMenuBreadcrumbComponent;
  let fixture: ComponentFixture<HamburgerMenuBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
