const assert = require('assert');
const User = require('../src/user');

describe('Validate records', () => {
  it('requires a user name', (done) => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'You must provide a user name');
    done();
  });

  it('requires a user name longer than 2 characters', (done) => {
    const user = new User({ name: 'al' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Please enter a name of 3 character or more');
    done();
  });

  it('disallows invalid records from being saved', (done) => {
    const user = new User({ name: 'al' });
    user.save().catch((validationResult) => {
      const { message } = validationResult.errors.name;
      assert(message === 'Please enter a name of 3 character or more');
    });

    done();
  });
});
