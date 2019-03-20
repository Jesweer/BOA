import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  // @Output() redirect = new EventEmitter<any>();
  @Input() menuList;
  @Input() serviceQueue;
  @Output()emitPass: EventEmitter<number> = new EventEmitter<number>();

  public beveragesMenu: any;
  
  public queue: any;

  constructor() { }

  ngOnInit() {
    
     
     this.queue = this.serviceQueue;
    
  }

  addItem(item) {
    this.emitPass.emit(item);
  }

}
