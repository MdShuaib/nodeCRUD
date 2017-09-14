var config = {
	port: 8080,
	mongo: {
		hostname: 'localhost',
		port: '27017',
		db: 'nodejsCRUD'
	}
	
};

config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + "/" + config.mongo.db;

module.exports = config;