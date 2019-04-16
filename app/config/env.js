const env = {
	database: 'vue-node-pg',
	username: 'vue-node-pg',
	password: 'test',
	host: 'localhost',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};

module.exports = env;
