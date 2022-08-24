const mysqlConectionConfig = {
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "adminadmin",
  database: "nest_db",
  entities: ["dist/src/**/*.entity.js"],
  synchronize: false,
  migrations: ["dist/src/db/migrations/*.js"],
};

export default mysqlConectionConfig;
