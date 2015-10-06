/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_latestrecords', {
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
    runtime: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    map: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
