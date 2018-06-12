/* jshint indent: 2 */


module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pqrsTable', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'phone'
    },
    pqrs: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'pqrs'
    }
  }, {
    tableName: 'pqrsTable'
  });
};
