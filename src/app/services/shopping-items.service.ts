import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../api-service/api.service';

@Injectable()
export class ShoppingItemsService {
  itemsUrl = 'shoppingItems';

  private sourceShoppingItems = new BehaviorSubject(null);
  shoppingItems = this.sourceShoppingItems.asObservable();

  private sourceShoppingItem = new BehaviorSubject(null);
  shoppingItem = this.sourceShoppingItem.asObservable();

  constructor(private apiService: ApiService) { }

  requestShoppingItems() {
    this.apiService.httpGetRequest(this.itemsUrl).subscribe(shoppingItems => {
      this.sourceShoppingItems.next(shoppingItems); // this will make sure to tell every subscriber about the change.
    });
  }

  requestShoppingItem(id) {
    this.apiService.httpGetRequest(`${this.itemsUrl}/${id}`).subscribe(shoppingItem => {
      this.sourceShoppingItem.next(shoppingItem);
    });
  }
}
