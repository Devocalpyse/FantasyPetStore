import { 
    InferAttributes, 
    InferCreationAttributes, 
    Model, 
    Sequelize, 
    DataTypes 
} from 'sequelize';

export class Creature extends Model<InferAttributes<Creature>, InferCreationAttributes<Creature>> {
  declare creatureId: number;
  declare name: string;
  declare imgUrl: string;
  declare description: string;
  declare mythology: string;
  declare createdOn?: Date;
  declare updatedOn?: Date;
}

export function CreatureFactory(sequelize: Sequelize) {
  Creature.init(
    {
      creatureId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mythology: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: 'creature',
      sequelize,
    }
  );
}
