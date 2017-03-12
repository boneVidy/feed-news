const req = require('request');
module.exports = class Base {
    constructor () {}
    static makeOptions (url) {
        return {
            url,
            port: 8080,
            method: 'GET',
            headers: {
                 'User-Agent': 'nodejs',
                'Content-Type': 'application/json'
            }
        }
    }

    static request (url) {
        return new Promise((resolve, reject) => {
            req(Base.makeOptions(url), (er, res, body) => {
                if (err) {
                    return reject(err);
                }
                resolve(body);
            })
        });
    }
}