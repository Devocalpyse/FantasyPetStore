import { Sequelize } from 'sequelize';
import { CreatureFactory } from './Creature';

const sequelize = new Sequelize(process.env.NAME!, process.env.USER!, process.env.PASS!, {
  host: process.env.HOST,
  port: parseInt(process.env.PORT!),
  dialect: 'mysql',
});

CreatureFactory(sequelize);

export const db = sequelize;