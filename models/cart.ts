// models/repository.model.ts

import {
  Model,
  Optional,
} from 'sequelize'

export interface CartAttribute {
  id: number
  id_user: number
  id_product: number
  quantity: number
  total: number
}

/*
    Ở đây mình cần khai báo RepositoryCreationAttributes để cho Sequelize và Typescript
    hiểu rằng property id sẽ là optional trong lúc create
*/

export interface RepositoryCreationAttributes
  extends Optional<CartAttribute, 'id'> { }

// models/repository.model.ts

import { sequelize } from '.'
import {
  DataTypes,
} from 'sequelize'
import { ModelScopeOptions } from 'sequelize'
import { ModelValidateOptions } from 'sequelize'
import { Product } from './product'
import { User } from './user'

const RepositoryDefinition = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_user: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  id_product: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  total: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

}

/*
    code interface
*/

export class Cart
  extends Model<CartAttribute, RepositoryCreationAttributes>
  implements CartAttribute {
  public id!: number
  public id_user!: number
  public id_product!: number
  public quantity!: number
  public total!: number

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
Cart.init(RepositoryDefinition, {
  sequelize,
  tableName: 'cart', // tên bảng trong MySQL
  underscored: true, // chuyển tên cột từ camelCase thành underscored
  updatedAt: true, // mặc định thêm các cột updated_at
  createdAt: true, // và created_at
  scopes: Cart.scopes,
  validate: Cart.validations,
})

Cart.belongsTo(Product, {
  foreignKey: 'id_product', // Khóa ngoại liên kết với bảng Product
})
Cart.belongsTo(User, {
  foreignKey: 'id_user', // Khóa ngoại liên kết với bảng User
});
