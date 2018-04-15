import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const shoppingItems = [
      {
        id: 11,
        name: 'Mr. Nice',
        coverImage: 'assets/images/one.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '200'
      },
      {
        id: 12,
        name: 'Narco',
        coverImage: 'assets/images/two.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '100'
      },
      {
        id: 13,
        name: 'Bombasto',
        coverImage: 'assets/images/three.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '200'
      },
      {
        id: 14,
        name: 'Celeritas',
        coverImage: 'assets/images/four.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '225'
      },
      {
        id: 15,
        name: 'Magneta',
        coverImage: 'assets/images/five.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '12'
      },
      {
        id: 16,
        name: 'RubberMan',
        coverImage: 'assets/images/one.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '229'
      },
      {
        id: 17,
        name: 'Dynama',
        coverImage: 'assets/images/two.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        descriptionImages: [
          'assets/images/two.jpg',
          'assets/images/three.jpg',
          'assets/images/five.jpg'
        ],
        price: '10'
      }
    ];

    return {shoppingItems};
  }
}
