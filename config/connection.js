import sequelize from 'sequelize';

export class Database {
    constructor(){
        this.mysqlDataBase();
    }
;


mysqlDataBase(){
     this.sequelize = new sequelize('nodecasadev', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
      });

      this.sequelize.authenticate()
      .then(()=>{
        console.log("Conexão com MYSQL realizado com sucesso.")
      })
      .catch(err =>{
          console.log(err);
      })
}};