
'use strict';

const body = require('koa-bodyparser');
const cors = require('kcors');
const koa = require('koa');
const logger = require('koa-logger');
const path = require('path');
const routes = require('koa-file-router');
const session = require('koa-session');
const siren = require('./middleware/siren');

const app = koa();
const router = routes(path.resolve(__dirname, './routes'));

app.use(cors({
  allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'DELETE' ],
  credentials: true
}));
app.use(logger());
app.use(siren);
app.keys = [ 'TODO siren' ];
app.use(session(app));
app.use(body());
app.use(router.routes());

app.listen(8636, () => {
  console.log(' > todo-siren running at http://localhost:8636/');
});
