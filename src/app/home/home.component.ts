import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  public menuList: any;
  public serviceQueue: any;
  public name: any;
  public quantity: any;
  public newDrink: any;

  @ViewChild('UserForm') UserForm: NgForm;

  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {

    this.http.get('../../assets/app-data/breverages.json').subscribe((res: any[]) => {
      this.menuList = res[0];
    });

    if(!this.data.getData()){
      this.http.get('../../assets/app-data/orderQueue.json').subscribe((res: any[]) => {
        this.serviceQueue = res;
        this.data.setData(this.serviceQueue);
      });
    }
    else{
      this.serviceQueue = this.data.getData();
    }
    
    

  }

  updateserviceQueue(item) {
    this.UserForm.reset();
    $("#exampleModal").modal('show');
    this.newDrink = item


  }

  formSubmit() {
    if (this.UserForm.invalid) {
      return;
    }
    let newItem = {
      "OrderCreatedTimeStamp": new Date().toString(),
      "OrderedBeverage": {
        "BeverageId": this.newDrink.BeverageId,
        "Name": this.newDrink.Name
      },
      "OrderQuantity": this.quantity,
      "IsBeingMixed": false,
      "IsReadyToCollect": false,
      "IsCollected": false,
      "BeverageBarUserId": "U034AT9TN",
      "BeverageBarUserFirstName": this.name,
      "OrderDeliveredTimeStamp": null
    };
    this.serviceQueue.push(newItem);
    this.data.setData(this.serviceQueue);
    $("#exampleModal").modal('hide');
  }

}
