import { Component, OnInit } from '@angular/core';
import {GroceryService} from '../grocery.service';
import {GroceryList} from '../GroceryList';
import {GroceryItem} from '../GroceryItem';


@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  grocerylists: GroceryList;
  itemname: string;
  itemamount: number;
  constructor(private groceryService:GroceryService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void{
    this.groceryService.getGroceryList().subscribe(grocerylists => this.grocerylists = grocerylists);
  }


}
