const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of db', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({
      name: 'Joe',
    });

    joe.save().then(() => done());
  });

  it('finds all users with a name of Joe', async () => {
    const users = await User.find({ name: 'Joe' });
    assert(users[0]._id.toString() === joe._id.toString());
    return users;
  });

  it('finds a user with a particular id', async () => {
    const user = await User.findOne({ _id: joe._id });
    assert(user.name === 'Joe');
    return user;
  });
});
