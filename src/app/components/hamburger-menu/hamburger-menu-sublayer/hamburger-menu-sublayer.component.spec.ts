import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuSublayerComponent } from './hamburger-menu-sublayer.component';

describe('HamburgerMenuSublayerComponent', () => {
  let component: HamburgerMenuSublayerComponent;
  let fixture: ComponentFixture<HamburgerMenuSublayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuSublayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuSublayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
