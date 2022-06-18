import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor() { }
  count :number=0

  ngOnInit(): void {
  }

    handleIncrease() { 
       this.count=this.count+1
    }
    handleDecrease(){
      this.count=this.count-1
    }
   

  

}
