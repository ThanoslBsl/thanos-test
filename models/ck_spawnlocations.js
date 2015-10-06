/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_spawnlocations', { 
    mapname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pos_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pos_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pos_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ang_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ang_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ang_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  });
};
