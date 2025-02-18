import {  Column, DataType, Model, Table } from "sequelize-typescript";

interface userCreation {
    email : string
    password: string
}
@Table({tableName: 'user'})
export class User extends Model<User, userCreation> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @Column({type: DataType.STRING,   allowNull: false})
    password: string;
}  