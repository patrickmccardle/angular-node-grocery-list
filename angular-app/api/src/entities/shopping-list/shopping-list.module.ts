import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShoppingListController } from "./shopping-list.controller";
import { ShoppingList } from "./shopping-list.entity";
import { ShoppingListService } from "./shopping-list.service";




@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingList]),
    ConfigModule
  ],
  providers: [ShoppingListService],
  controllers: [ShoppingListController],
})
export class ShoppingListModule {}
