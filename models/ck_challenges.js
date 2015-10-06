/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_challenges', {
    steamid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    steamid2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bet: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
    },
    map: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
