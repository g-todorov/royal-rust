import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuContentComponent } from './hamburger-menu-content.component';

describe('HamburgerMenuContentComponent', () => {
  let component: HamburgerMenuContentComponent;
  let fixture: ComponentFixture<HamburgerMenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
