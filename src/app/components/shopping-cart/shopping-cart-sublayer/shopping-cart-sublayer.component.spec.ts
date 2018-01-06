import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSublayerComponent } from './shopping-cart-sublayer.component';

describe('ShoppingCartSublayerComponent', () => {
  let component: ShoppingCartSublayerComponent;
  let fixture: ComponentFixture<ShoppingCartSublayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartSublayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSublayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
