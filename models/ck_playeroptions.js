/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ck_playeroptions', {
    steamid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    speedmeter: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    quake_sounds: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '1'
    },
    autobhop: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    shownames: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '1'
    },
    goto: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '1'
    },
    showtime: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '1'
    },
    hideplayers: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    showspecs: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '1'
    },
    knife: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'weapon_knife'
    },
    new1: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    new2: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    new3: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '0'
    },
    checkpoints: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: '1'
    }
  });
};
