import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  arr = ['0','1','2','3','4'];

  getData(){
    return this.arr;
  }

  setData(oldValue, newValue){
    this.arr[(this.arr.indexOf(oldValue))] = newValue;
  }
}
