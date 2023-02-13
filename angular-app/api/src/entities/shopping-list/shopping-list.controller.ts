import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ShoppingList } from "./shopping-list.entity";
import { ShoppingListService } from "./shopping-list.service";

@Controller('shoppingList')
export class ShoppingListController {

    constructor(private service: ShoppingListService) {}

    @Get('test')
    testService() {
        return this.service.test();
    }

    @Get()
    getShoppingLists() {
        return this.service.getShoppingLists();
    }

    @Get('/:id')
    getShoppingList(@Param('id') id: number) {
        return this.service.getShoppingList(id)
    }

    @Post()
    createShoppingList(@Body() shoppingList: ShoppingList) {
        return this.service.createShoppingList(shoppingList)
    }

    @Put('/:id')
    async updateShoppingList(@Param('id') id, @Body() shoppingList) {
        return await this.service.updateShoppingList(id, shoppingList)
    }
}