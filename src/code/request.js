const request = require('superagent');
const get = require('lodash.get');
class Request {
    constructor(basePath) {
        this.basePath = basePath
    }

    async get(path, data = {}) {
        const fullUrl = `${this.basePath}${path}`;
        let queryStr = Object.keys(data).map((key) => {
            return `${key}=${encodeURI(data[key])}`;
        }).join('&');
        try {
            const result = await request.get(fullUrl).query(queryStr);
            // const responseData = get(result, 'body');
            return result;
        } catch (e) {
            throw e;
        }


    }

    async post(path, data) {
        const fullUrl = `${this.basePath}${path}`;
        let queryStr = data;
        if (Object.prototype.toString.call(data) === '[object Object]') {
            queryStr = Object.keys(data).map((key) => {
                return `${key}=${encodeURI(data[key])}`;
            }).join('&');
        }
        try {
            const result = await request.post(fullUrl).send(queryStr);
            // const responseData = get(result, 'body.Response');
            return result;
        } catch (e) {
            throw e;
        }
    }
}

exports.Request = Request;