// var config = {
// 	port: 8080,
// 	mongo: {
// 		hostname: 'localhost',
// 		port: '27017',
// 		db: 'salescrm'
// 	}
	
// };

// config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + "/" + config.mongo.db;

// module.exports = config;

var config = {
    port: 2107,
    //site: 'http://localhost/salescrm-web/#/', //ending with hash followed by a slash
    site: 'http://crm.stagging.in/#/', //ending with hash followed by a slash


    //Database credentials
    mongo: {
        hostname: "162.243.50.101",
        port: "38086",
        db: 'salescrm'
    },

};

config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;
module.exports = config;
