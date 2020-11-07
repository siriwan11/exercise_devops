const assert = require('assert')
const Request = require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"',()=>{
    it('respond with Hello!',(done) =>{
        Request(app).get('/').expect('Hello!',done)

    })
})