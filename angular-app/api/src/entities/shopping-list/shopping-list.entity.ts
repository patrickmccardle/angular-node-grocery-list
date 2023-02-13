import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text", {nullable: false, array: true})
    items: string[];
}