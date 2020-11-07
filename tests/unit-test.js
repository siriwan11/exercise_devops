const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('GET "/item"', () => {
    it('respond with array of item', (done) => {
        let want = [
            { id:1,name:'iphone12' },
            { id:2,name:'nokia3301' }
        ]
        request(app).get('/item').expect(want, done)
    })
})