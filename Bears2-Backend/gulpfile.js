const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const gutil = require('gulp-util');
const SequelizeFixtures = require('sequelize-fixtures');

env({
  file: './.env',
  type: 'ini',
});

const db = require('./db/models');

const models = {
  User: db.User,
  Orders: db.Orders,
  Order_Items: db.Order_Items
};

// Sync DB tables
gulp.task('sync', (cb) => {
  db.User.sync({ force: true })
  .then(() => db.Orders.sync({ force: true }))
  .then(() => db.Order_Items.sync({ force: true }))
  .then(() => { cb(); })
  .catch((err) => { cb(err); });
});

// Seed DB for testing
gulp.task('seed:seed', ['sync'], (cb) => {
  SequelizeFixtures.loadFile(models)
    .then(() => {
      cb();
    })
    .catch((err) => {
      cb(err);
    });
});

// gulp.task('seed', ['sync', 'seed:seed']);

gulp.task('nodemon', () => {
  const stream = nodemon({
    script: 'server/app.js',
    watch: ['server/'],
    ignore: ['client/**'],
  });
});

gulp.task('dbwatch', () => {
  gulp.watch(['./server/db/models'], ['seed']);
});

// gulp.task('webpack-dev-server', () => {
//   const compiler = webpack(webpackConfig);
//   new WebpackDevServer(compiler, {
//     contentBase: './static',
//     publicPath: '/static',
//     hot: true,
//     inline: true,
//     stats: true,
//     clientLogLevel: 'info',
//     proxy: [
//       {
//         context: ['/api', '/', '/sock'],
//         target: `http://localhost:${process.env.PORT}`,
//         changeOrigin: true,
//       },
//     ],
//   }).listen(8080, 'localhost', (err) => {
//     if (err) {
//       throw new gutil.PluginError('webpack-dev-server ', err);
//     }
//     gutil.log('[webpack-dev-server]', 'WPDS - Listening in on http://localhost:8080');
//   });
// });

gulp.task('default', ['nodemon', 'dbwatch']);
