const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', (_) => {})
    .on('error', (error) => console.log(`Error: ${error}`));

  done();
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
