exports.shorthands = undefined;

// create initial tables
exports.up = (pgm) => {
  pgm.createTable('users', {
    id: 'id',
    name: { type: 'varchar(100)', notNull: true },
    email: { type: 'varchar(320)', notNull: true },
    phone: { type: 'varchar(20)', notNull: true },
    password: { type: 'varchar(60)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('staff', {
    id: 'id',
    name: { type: 'varchar(100)', notNull: true },
    email: { type: 'varchar(320)', notNull: true },
    phone: { type: 'varchar(20)', notNull: true },
    image: { type: 'varchar(100)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {};
