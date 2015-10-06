/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_playerrank', {
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
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    points: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    winratio: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    pointsratio: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    finishedmaps: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    multiplier: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    finishedmapspro: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    lastseen: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
};
