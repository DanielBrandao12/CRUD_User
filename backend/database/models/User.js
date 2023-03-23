module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        Id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Nome: {
          type: DataTypes.STRING,
        },
        Email: {
          type: DataTypes.STRING,
        },
        Senha: {
          type: DataTypes.STRING,
        }
     
      },
      {
        tableName: "users",
        timestamps: false,
      }
    );



    return User;
    }