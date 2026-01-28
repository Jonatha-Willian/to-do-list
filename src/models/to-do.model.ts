import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg'

//Tipando o model e extendendo a classe Model do sequelize
export interface TodoInstance extends Model {
    id: number;
    description: Text;
    title: string;
    done: boolean;
}
//Definindo o model e suas propriedades
export const Todo = sequelize.define<TodoInstance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todos',
    timestamps: false
});