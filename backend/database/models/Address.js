module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define(
      "Address",
      {
        Id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Rua: {
          type: DataTypes.STRING,
        },
        Numero: {
          type: DataTypes.INTEGER,
        },
        Bairro: {
          type: DataTypes.STRING,
        },
        Cidade: {
          type: DataTypes.STRING,
        },
        Estado: {
          type: DataTypes.STRING,
        },
        User_id: {
          type: DataTypes.INTEGER,
        },
       
      },
      {
        tableName: "address",
        timestamps: false,
      }
    );

    Address.associate = function (models) {
        Address.belongsTo(models.User, {
          as: "users",
          foreignKey: "User_id",
        });
      };
    
    return Address;
  };