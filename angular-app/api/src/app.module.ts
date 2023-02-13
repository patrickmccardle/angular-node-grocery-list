import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ShoppingList } from './entities/shopping-list/shopping-list.entity';
import { ShoppingListModule } from './entities/shopping-list/shopping-list.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 32769,
      username: 'admin',
      password: 'admin',
      database: 'app-db',
      entities: [ShoppingList],
      synchronize: true,
    }),
    ShoppingListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
