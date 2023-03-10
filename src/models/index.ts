import { Sequelize } from 'sequelize';
import { CreatureFactory } from './Creature';
import { password } from './password';

const name = 'petDb';
const user = 'root';
const pass = password;

const sequelize = new Sequelize(name, user, pass, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

CreatureFactory(sequelize);

export const db = sequelize;