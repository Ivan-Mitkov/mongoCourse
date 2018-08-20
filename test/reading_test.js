const assert = require('assert');
const User = require('../src/user');

describe('reading users out of the DB', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: "Joe" });
        joe.save().then(() => done())
    })
    it('find all the users with the name Joe', (done) => {
        User.find({ name: "Joe" })
            .then((users) => {
                // console.log(`${users[0]._id}\n${joe._id}`);
                //_id is an object not a string
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            })

    });
    it('find an user with a particular _id',(done)=>{
        User.findOne({_id:joe._id})
        .then((user)=>{
            assert(user._id.toString()===joe._id.toString());
            done();
        })
    })
})