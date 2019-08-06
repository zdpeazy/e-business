let sql = require('../sql/sql');
let moment = require('moment');
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
  login(ctx, next){
    console.log(ctx.request.body)
    const grammar = 'select * from members WHERE member_name = ?'
    let userInfo = ctx.request.body;
    
    if(!userInfo.userName || !userInfo.password) 
    return ctx.response.body = renderJson(2001);
    let values = [userInfo.userName]
    poolFn.connPool(grammar, values).then(result => {
      result = formatData(result);
      console.log(result)
      ctx.response.body = renderJson(0, result[0]);
    })

  },

  // 登出
  logout(){

  },

  // 查询所有员工
  fetchAll(){

  },

  // 查询当前员工信息
  fetchById(){

  },

  // 添加
  addById(){

  },

  // 删除
  deleteById(){

  }
  
}
