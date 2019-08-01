const Router = require('koa-router');
const Static = require('koa-static');

const router = new Router();

// 首页
router.get('/admin/', (ctx, next) => {
  ctx.response.body = '首页';
})

// 登录
router.post('/admin/login', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = ctx.request.body
})

module.exports = router;
