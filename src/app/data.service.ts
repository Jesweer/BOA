import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public commonQueue :any;

  constructor() {  }

  getData(){
    return this.commonQueue;
  }

  setData(data){
    this.commonQueue = data;
  }
}
