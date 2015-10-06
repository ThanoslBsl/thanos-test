/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_playertemp', {
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
    cords1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    cords2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    cords3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    angle1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    angle2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    angle3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    EncTickrate: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '-1'
    },
    runtimeTmp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    BonusTimer: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Stage: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
