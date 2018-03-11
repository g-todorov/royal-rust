import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../api-service/api.service';

@Injectable()
export class ShoppingItemsService {
  itemsUrl = 'shoppingItems'
  // shoppingItems:[any];

  private sourceShoppingItems = new BehaviorSubject(null);
  shoppingItems = this.sourceShoppingItems.asObservable();

  private sourceShoppingItem = new BehaviorSubject(null);
  shoppingItem = this.sourceShoppingItem.asObservable();

  constructor(private apiService: ApiService) { }

  requestShoppingItems(itemName) {
    let currentShoppingItems = this.sourceShoppingItems.value;

    // TODO Decide on whether request prevention is needed 
    // if(currentShoppingItems !== null && itemName) {
    //   this.setShoppingItemByName(itemName)
    //   return
    // } else if (currentShoppingItems !== null) {
    //   return
    // }

    this.apiService.httpGetRequest(this.itemsUrl).subscribe(shoppingItems => {
      this.sourceShoppingItems.next(shoppingItems); // this will make sure to tell every subscriber about the change.

      if(itemName) {
        this.setShoppingItemByName(itemName);
      }
    });
  }

  setShoppingItemByName(itemName) {
    let currentShoppingItems = this.sourceShoppingItems.value;
    let shoppingItem = currentShoppingItems.find(item => {
      if(item.name === itemName) {
        return item;
      }
    })
    
    this.sourceShoppingItem.next(shoppingItem);
  }
}
