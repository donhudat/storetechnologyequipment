// models/repository.model.ts

import {
  Model,
  Optional,
} from 'sequelize'

export interface RepositoryAttributes {
  id: number
  firstname: string
  lastname: string
  password: string
  email: string
}

/*
    Ở đây mình cần khai báo RepositoryCreationAttributes để cho Sequelize và Typescript
    hiểu rằng property id sẽ là optional trong lúc create
*/

export interface RepositoryCreationAttributes
  extends Optional<RepositoryAttributes, 'id'> { }

// models/repository.model.ts

import { sequelize } from '.'
import {
  DataTypes,
} from 'sequelize'
import { ModelScopeOptions } from 'sequelize'
import { ModelValidateOptions } from 'sequelize'

const RepositoryDefinition = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstname: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

/*
    code interface
*/

export class User
  extends Model<RepositoryAttributes, RepositoryCreationAttributes>
  implements RepositoryAttributes {
  public id!: number
  public firstname!: string
  public lastname!: string
  public password!: string
  public email!: string

  static readonly scopes: ModelScopeOptions = {
    /*
      nơi khai báo scope
    */
  }

  static readonly validations: ModelValidateOptions = {
    /*
      nơi khai báo validation
    */
  }
}

// Initialization
User.init(RepositoryDefinition, {
  sequelize,
  tableName: 'users', // tên bảng trong MySQL
  underscored: true, // chuyển tên cột từ camelCase thành underscored
  updatedAt: true, // mặc định thêm các cột updated_at
  createdAt: true, // và created_at
  scopes: User.scopes,
  validate: User.validations,
})



