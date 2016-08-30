var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');
var fs = require('fs')
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

///引入art-template模板引擎
// var template = require('art-template');
/////art-template配置 标准格式 照抄即可
// app.set('views', './views');//放模板文件的目录 此处是模板文件的存放位置
// template.config('base', ''); ////指定模板目录
// template.config('extname', '.html'); ////模板的后缀名
// app.engine('.html', template.__express); ////express的html模板引擎使用art-template
// app.set('view engine', 'html'); ////设置express模板引擎


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
////静态文件没有指定路径 可以直接通过根目录访问如 '/文件夹/文件名'
app.use('/stars',express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

/////引入模块 最终的js文件可以省略js后缀名
// app.use('/news',require('./routes/news/editor'))
// app.use('/news',

app.post('/users/reg', function (req, res) {
    var name = (new Date()).getTime;

    /***
     * 把数据写入文件
     */
    fs.writeFile('data/' + name + '.json', JSON.stringify(req.body));

    res.send(JSON.stringify(req.body) + '<br/>注册成功');
})



var server = app.listen('3000', function () {
    var address = server.address().address;
    var port = server.address().port;
    console.log('服务器地址为' + address + ',端口号为' + port);
})