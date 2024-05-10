// models/repository.model.ts

import {
  Model,
  Optional,
} from 'sequelize'

export interface RepositoryAttributes {
  id: number
  name: string
  img: string
  price: number
  sale_price: number
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
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  img: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  sale_price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}

/*
    code interface
*/

export class Product
  extends Model<RepositoryAttributes, RepositoryCreationAttributes>
  implements RepositoryAttributes {
  public id!: number
  public name!: string
  public img!: string
  public price!: number
  public sale_price!: number

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
Product.init(RepositoryDefinition, {
  sequelize,
  tableName: 'products', // tên bảng trong MySQL
  underscored: true, // chuyển tên cột từ camelCase thành underscored
  updatedAt: true, // mặc định thêm các cột updated_at
  createdAt: true, // và created_at
  scopes: Product.scopes,
  validate: Product.validations,
})

