let renderJson = (code, data) => {
  let resJson = {},
    message = 'server is fail';
  // 用户 1000+
  // 后台 2000+
  switch(code){
    case 0:  message =  'server is ok'; break;
    case 2001: message = '用户名或密码错误'; break;
    case 2002: message = '用户名不存在'; break;
    case 2003: message = '密码错误'; break;
    case 2004: message = '用户名和密码不能为空'; break;
    case 2005: message = '添加用户信息失败'; break;
    case 2006: message = '修改用户信息失败'; break;

  }

  Object.assign(resJson, {
    code: code,
    message: message,
    data: data || ''
  })

  return resJson;
}

module.exports = renderJson;