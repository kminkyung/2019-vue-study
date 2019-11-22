# 22.vue-study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## node.js 의 기본제공 모듈 목록
~~~js
const fs = require('os');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const crypto = require('crypto');
~~~

## express 기본 제공 Module 및 Middleware 목록
- Express
- app
- Router
- Request
- Response
- 기본제공 미들웨어: express.static()

## 개발의 편리를 위한 Global Program
~~~bash
# 하나의 컴퓨터에서 한번만 설치하면 됨
npm i -g supervisor
npm i -g pm2
npm i -g @vue/cli
~~~

## node.js 프로젝트 구현을 위한 외부 Module 및 Middleware 목록
~~~bash
npm i express
npm i morgan
npm i http-errors
npm i pug
npm i multer
npm i mysql
npm i mysql2
npm i sequelize
npm i sequelize-cli
npm i express-session
npm i session-file-store
npm i cookie-parser
npm i method-override

# 본 프로젝트에 설치한 Module 및 Middleware 목록
npm i express
npm i morgan
npm i http-errors
npm i mysql2
npm i sequelize
npm i method-override
~~~