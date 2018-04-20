import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemImageComponent } from './shopping-item-image.component';

describe('ShoppingItemImageComponent', () => {
  let component: ShoppingItemImageComponent;
  let fixture: ComponentFixture<ShoppingItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
