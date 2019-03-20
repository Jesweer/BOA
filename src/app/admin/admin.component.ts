import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  public commonQueue :any;

  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {  

    this.commonQueue = this.data.getData();
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

  drinkInProgress(item){
    item.IsBeingMixed = true;
  }

  drinkReady(item){
    item.IsReadyToCollect = true;
  }

  drinkPicked(item){
    item.IsCollected = true;
  }

}
