let renderJson = (code, data) => {
  let resJson = {},
    message = 'server is fail';
  // 用户 1000+
  // 后台 2000+
  switch(code){
    case 0:
    message =  'server is ok'
    break;
    // 后台错误
    case 2001:
    message = '用户名或密码错误'
    break;

  }

  Object.assign(resJson, {
    code: code,
    message: message,
    data: data || ''
  })

  return resJson;
}

module.exports = renderJson;