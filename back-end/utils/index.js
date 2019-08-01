const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.response.body = '首页';
})

module.exports = {
  router
}
