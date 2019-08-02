let sql = require('../sql/sql');
// let moment = require('moment');
let func = require('../sql/func');
// let path = require('path');




// function formatData(rows) {
// 	return rows.map(row => {
// 		let date = moment(row.create_time).format('YYYY-MM-DD');
// 		return Object.assign({}, row, {
// 			create_time: date
// 		});
// 	});
// }



module.exports = {
  // 登录
  login(ctx, next){
    console.log(ctx.request.body)
    ctx.response.body = {
      messsage: '登录成功'
    }
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
