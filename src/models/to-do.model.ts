import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg'

//Tipando o model e extendendo a classe Model do sequelize
export interface ToDoInstance extends Model {
    id: number;
    title: string;
    done: boolean;
}
//Definindo o model e suas propriedades
export const ToDo = sequelize.define<ToDoInstance>('ToDo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'to-dos',
    timestamps: false
});