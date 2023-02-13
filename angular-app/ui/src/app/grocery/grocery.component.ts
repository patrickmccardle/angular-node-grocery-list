import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  lists: any

  
  constructor(private httpService: HttpClient) {

  }
  ngOnInit(): void {
    this.getLists()
  }

  getLists() {
    return this.httpService.get('http://localhost:3000/shoppingList').subscribe(lists => {
      console.log('lists', lists)
      this.lists = lists;
      return this.lists;
    })
  }

  

}
