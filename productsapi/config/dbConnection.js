var dbProps=require('./dbProperties');
var mysql=require("mysql");


exports.getConnection = function(){
    console.log("Method Called");
    return mysql.createConnection({
        host:dbProps.host,
        user:dbProps.user,
        password:dbProps.password,
        database:dbProps.dbName
});
}