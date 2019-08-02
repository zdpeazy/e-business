const Router = require('koa-router');
const api = require('../api');
const member = require('../controllers/member');

const router = new Router();

// 首页
router.get('/admin/', (ctx, next) => {
  ctx.response.body = '首页';
})

// 后台员工
router.post(api.adminLogin, member.login);
router.post(api.adminLogout, member.logout);
router.get(api.adminList, member.fetchAll);
router.get(api.adminGetInfo, member.fetchById);
router.post(api.adminAdd, member.addById);
router.post(api.adminDelete, member.deleteById);


module.exports = router;
