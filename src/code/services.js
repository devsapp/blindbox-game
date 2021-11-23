const { Request } = require('./request');
const DEFAULT_BASEURL = 'http://activity.devsapp.cn';
const _request = new Request(DEFAULT_BASEURL);

// 抽奖
// - uid: 用户uid
const prize = async (uid) => {
  try {
    const result = await _request.post('/api/v1/bba/prize', { uid });
    return {
      code: result.status,
      data: JSON.parse(result.text)
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}



// 填写地址信息
// - uid: 用户uid
// - token: 用的中奖token
// - name: 用户姓名
// - phone: 用户电话
// - address: 用户地址
const addInformation = async (data) => {
  try {
    ;
    const result = await _request.post('/api/v1/bba/information', data);
    return {
      code: 200,
      data: JSON.parse(result.text)
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

// 查询信息 param: 
//    - uid: 用户uid
//    - token: 用的中奖token
const queryInformation = async (params) => {
  try {
    const result = await _request.get('/api/v1/bba/information', params);
  
    return {
      code: 200,
      data: JSON.parse(result.text)
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

// 查询中奖状态
const getPrizeNumber = async (params) => {
  try {
    const result = await _request.get('/api/v1/bba/status', params);
  
    return {
      code: 200,
      data: JSON.parse(result.text)
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}





module.exports = {
  prize,
  addInformation,
  queryInformation,
  getPrizeNumber

}