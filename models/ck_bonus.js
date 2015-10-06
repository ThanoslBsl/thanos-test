/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_bonus', {
    steamid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mapname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    runtime: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    }
  });
};
