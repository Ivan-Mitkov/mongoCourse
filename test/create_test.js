const assert = require('assert');
const User=require('../src/user.js');

describe('Creating records',()=>{

    it('saves a user',(done)=>{
        const joe= new User({name:'Joe'});
        joe.save()
        .then(()=>{
            //has been save successfully
            assert(!joe.isNew);
            done();
        })
    });


})