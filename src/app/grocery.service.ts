import { Injectable } from '@angular/core';
import {GroceryList} from './GroceryList';
import {GroceryItem} from './GroceryItem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {UserService} from './user.service';

@Injectable()
export class GroceryService {

    user;
    userlist: GroceryList;
    groceryitemlist: GroceryItem[] = [];
    constructor(private userservice:UserService) { }


    getGroceryList(): Observable<GroceryList>{

        let json =  '{"records":[{"id":"1","user_id":"1","groceryItems": [ {"name":"testobject","amount":3}, {"name":"testobject2","amount":3}]}]}';
        let jsonData = JSON.parse(json);


        this.user = this.userservice.getUser_id();


        for (let list of jsonData.records ){
            if(list.user_id == this.user) {

                for(let grocery of list.groceryItems){

                    this.groceryitemlist.push(new GroceryItem(grocery.name,grocery.amount));
                }

                let fetchedlist: GroceryList = {
                    id: list.id,
                    user_id: list.user_id,
                    groceryItemArray: this.groceryitemlist
                };
                this.userlist = fetchedlist;
            }
        }
        return of (this.userlist);

    }

    unSerializeGroceryItems(groceryitems: string): GroceryItem[]{

        let jsonData = JSON.parse(groceryitems);

        for(let item of jsonData.groceryItems){

            this.groceryitemlist.push(new GroceryItem(item.name,item.amount));
        }
        return this.groceryitemlist;
    }

    addItem(itemname:string,itemamount:number): void{
        this.groceryitemlist.push(new GroceryItem(itemname,itemamount));
        console.log(JSON.stringify(this.groceryitemlist));

    }
    RemoveItem(): void{
        this.groceryitemlist = [];

    }
}
