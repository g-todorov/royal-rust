import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getLocalStorageItem(key) {
    const currentItems = localStorage.getItem(key);
    return currentItems == null ? [] : JSON.parse(currentItems);
  }

  setLocalStorageItem(key, data) {
    const stringifiedItems = JSON.stringify(data);
    localStorage.setItem(key, stringifiedItems);
  }

}
