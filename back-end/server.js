const koa = require('koa');
const PORT = process.env.PORT || 3000;
const bodyParser = require('koa-bodyparser');
// const Utils = require('./utils');
const router = require('./routers');
const static = require('koa-static');

const app = new koa();


//demo
app.use(static(__dirname + '/demo'));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);