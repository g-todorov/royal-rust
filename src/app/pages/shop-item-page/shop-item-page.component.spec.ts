import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemPageComponent } from './shop-item-page.component';

describe('ShopItemPageComponent', () => {
  let component: ShopItemPageComponent;
  let fixture: ComponentFixture<ShopItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
