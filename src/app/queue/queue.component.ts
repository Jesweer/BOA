import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent implements OnInit {

  // private _serviceQueue : any;
  // @Input() 
  // set serviceQueue(val :any){
  //   this._serviceQueue = val;
  //   this.updateQueue(this._serviceQueue);
  // }

  // get serviceQueue():any{ return this._serviceQueue}
  @Input() serviceQueue:any;

  public inQueue: any;
  public beingPrepared: any;
  public readyToCollect: any;
  public drinkCollected: any;  

  constructor() {
  }

  ngOnInit() {
    
      this.serviceQueue;
    
  }

  inqueue(data){
    if(data){
      return data.filter(value => value.IsBeingMixed == false);
    }
  }

  inpreparation(data){
    if(data){
      return data.filter(value => value.IsBeingMixed == true && value.IsReadyToCollect == false && value.IsCollected == false);
    }
  }

  ready(data){
    if(data){
    return data.filter(value => value.IsReadyToCollect == true && value.IsReadyToCollect == true && value.IsCollected == false );
    }
  }
}
