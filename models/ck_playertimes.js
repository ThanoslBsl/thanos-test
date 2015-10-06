/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_playertimes', {
    steamid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    mapname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    runtimepro: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    }
  });
};
