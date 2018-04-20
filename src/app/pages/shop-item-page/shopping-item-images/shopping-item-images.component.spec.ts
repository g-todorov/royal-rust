import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemImagesComponent } from './shopping-item-images.component';

describe('ShoppingItemImagesComponent', () => {
  let component: ShoppingItemImagesComponent;
  let fixture: ComponentFixture<ShoppingItemImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingItemImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
