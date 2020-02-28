//Node Connection to MySQL

var mysql = require ('mysql');

var connection;

// if (process.env.JAWSDB_URL)
// {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else
// {
	connection = mysql.createConnection(
	{
		host: 'kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
		user: 'uafaowg0y4huycqb',
		password: "f50stducvaij2fmx",
		port :3306,

		database: 'c6kv4tfh1iq84qd4'
	});
//};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;