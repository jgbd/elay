const Sequelize = require('sequelize');


function configConnection() {
    // const sequelize = new Sequelize('interventoria', 'postgres', 'Int2017IP1', {
    const sequelize = new Sequelize('ElayPQRS', 'postgres', '123', {  //'NJpost2016'  Int2017IP1
        //host: 'knower.udenar.edu.co',
        host: 'localhost',
        // host: '10.10.10.106',
        dialect: 'postgres'
        
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    return sequelize;
}

module.exports.configConnection=configConnection

