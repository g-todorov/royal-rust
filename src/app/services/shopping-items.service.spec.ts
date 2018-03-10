import { TestBed, inject } from '@angular/core/testing';

import { ShoppingItemsService } from './shopping-items.service';

describe('ShoppingItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingItemsService]
    });
  });

  it('should be created', inject([ShoppingItemsService], (service: ShoppingItemsService) => {
    expect(service).toBeTruthy();
  }));
});
