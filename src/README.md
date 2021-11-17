# 帮助文档
## 抽奖
- path: api/v1/bba/prize
- method: post
- param: 
    - uid: 用户uid
- code:
    ```javascript
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
     'uid': 'demo123345sssadasssdsadsadsadsadasadfassadasadf' 
    });
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/bba/prize',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    ```
- response:
    - 成功：
        - 没中奖：
            ```json
            {"Result": "0"}
            ```
        - 中奖：
            ```json
            {
                "Result": {
                    "token": "hvqszmtfyo",
                    "prize": "充电宝"
                }
            }
            ```
    - 失败：
        ```json
        {"Error": "Everyone can only participate once."}
        ```
        ```json
        {"Error": "Uid is required."}
        ```

## 设置地址等信息
- path: api/v1/bba/information
- method: post
- param: 
    - uid: 用户uid
    - token: 用的中奖token
    - name: 用户姓名
    - phone: 用户电话
    - address: 用户地址
- code:
    ```javascript
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
     'uid': 'demo123345sssadasssdsadsadsadsadasadfassadasadf',
    'token': 'hvqszmtfyo',
    'name': 'jiuyu',
    'phone': '231231',
    'address': 'asdasdas' 
    });
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/bba/information',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    ```
- response:
    - 成功：
        ```json
        {"Result": "Saved successfully."}
        ```
    - 失败：
        ```json
        {"Error": "The saved cannot be modified."}
        ```
        ```json
        {"Error": "Name, phone and address are required."}
        ```
        ```json
        {"Error": "No winning information has been found yet."}
        ```
        ```json
        {"Error": "No information found yet."}
        ```
        ```json
        {"Error": "Uid and token are required."}
        ```
      
## 查询信息
- path: api/v1/bba/information
- method: get
- param: 
    - uid: 用户uid
    - token: 用的中奖token
- code:
    ```javascript
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/v1/bba/information?uid=demo123345sssadasssdsadsadsadsadasadfassadasadf&token=hvqszmtfyo',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    ```
- response:
    - 成功：
        ```json
        {
            "Result": {
                "prize": "充电宝",
                "name": "jiuyu",
                "phone": "231231",
                "address": "asdasdas"
            }
        }
        ```
    - 失败：
        ```json
        {"Error": "Name, phone and address are required."}
        ```
        ```json
        {"Error": "No winning information has been found yet."}
        ```
        ```json
        {"Error": "No information found yet."}
        ```


