let sql = require('../sql/sql');
let moment = require('moment');
let jwt = require('jsonwebtoken');
let poolFn = require('../sql/poolFn');
let renderJson = require('../routers/renderJson');

let formatData = rows => {
	return rows.map(row => {
		let date = moment(row.create_time).format('YYYY-MM-DD');
		return Object.assign({}, row, {
			create_time: date
		});
	});
}



module.exports = {
  // 登录
  // async 声明是一个异步函数
  // await 等待异步函数执行
  async login(ctx, next){
    const grammar = 'select * from members WHERE member_name = ?'
    let userInfo = ctx.request.body,
    resJson = '';
    
    if(!userInfo.userName || !userInfo.password) 
    return ctx.response.body = renderJson(2001);
    let values = [userInfo.userName];
    await poolFn.connPool(grammar, values).then(result => {
      result = formatData(result);

      if(!result[0]){
        resJson = renderJson(2002);
      } else if(result[0].member_password !== userInfo.password){
        resJson = renderJson(2003);
      } else {
        delete result[0].member_password;
        resJson = renderJson(0, {
          member_name: result[0].member_name,
          token: result[0].token,
          role: 0
        });
      }
      ctx.response.body = resJson;
    })

  },

  //注销 
  logout(){

  },


  // 新增用户
  async addById(ctx, next){
    const grammar = {
      query: 'select * from members WHERE member_name = ?',
      add: 'INSERT INTO members(member_name, member_phone, member_password, token) VALUES(?, ?, ?, ?)',
      update: 'UPDATE members SET member_password = ? WHERE member_name = ?'
    }
    let userInfo = ctx.request.body,
      resJson = '';
    if(!userInfo.userName || !userInfo.password) 
    return ctx.response.body = renderJson(2004);

    let values = {
      query: [userInfo.userName],
      add: [userInfo.userName, userInfo.userName, userInfo.password],
      update: [userInfo.password, userInfo.userName]
    },
    hasMember = false;

    await poolFn.connPool(grammar.query, values.query).then(result => {
      hasMember = !result[0] ? false : true
    })

    resJson = renderJson(0);
    if(!hasMember){
      let token = jwt.sign({ phone: userInfo.userName }, 'shhhhh');
      values.add.push(token.split('.')[0]);
      await poolFn.connPool(grammar.add, values.add).then(result => {
        if(!result[0]) resJson = renderJson(2005);
      })
    } else {
      await poolFn.connPool(grammar.update, values.update).then(result => {
        if(!result) resJson = renderJson(2006);
      })
    }

    ctx.response.body = resJson;

  },

  // 查询所有员工
  fetchAll(){

  },

  // 查询当前员工信息
  fetchById(){

  },


  // 删除
  deleteById(){

  }
  
}
