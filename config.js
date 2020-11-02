module.exports = {
	//=>WEB服务端口号
	PORT: 8888,

	//=>CROS跨域相关信息
	CROS: {
		ALLOW_ORIGIN: 'http://127.0.0.1:5500',
		ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',  //请求方式
		
		HEADERS: 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With,account,Authorization',
		CREDENTIALS: true   //请求凭证
	},

	//=>SESSION存储相关信息
	SESSION: {
		secret: 'ZFPX',
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
		}
	}
};