/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_maptier', { 
    mapname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tier: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
    }
  });
};
