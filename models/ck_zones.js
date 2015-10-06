/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_zones', { 
    mapname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zoneid: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      defaultValue: '-1'
    },
    zonetype: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '-1'
    },
    zonetypeid: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '-1'
    },
    pointa_x: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '-1'
    },
    pointa_y: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '-1'
    },
    pointa_z: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '-1'
    },
    pointb_x: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '-1'
    },
    pointb_y: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '-1'
    },
    pointb_z: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '-1'
    },
    vis: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    team: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    }
  });
};
