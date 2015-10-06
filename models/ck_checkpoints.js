/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_checkpoints', {
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
    cp1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp3: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp4: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp5: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp6: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp7: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp8: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp9: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp10: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp11: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp12: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp13: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp14: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp15: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp16: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp17: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp18: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp19: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cp20: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    }
  });
};
