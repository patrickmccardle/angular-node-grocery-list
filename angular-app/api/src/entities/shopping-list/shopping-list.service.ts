import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ShoppingList } from "./shopping-list.entity";

@Injectable()

export class ShoppingListService {

    constructor(@InjectRepository(ShoppingList)
    private repo: Repository<ShoppingList>) {

    }

    test() {
        console.log('shopping list service works');
        return 'shopping list service works'
    }

    async createShoppingList(shoppingList) {
       return await this.repo.save(shoppingList);
    }

    getShoppingList(id) {
        return this.repo.findOneBy({id});
    }

    getShoppingLists() {
        return this.repo.find();
    }

    async updateShoppingList(id, shoppingList) {
        shoppingList.id = id;
        await this.repo.update(id, shoppingList);
        return shoppingList;
    }
}