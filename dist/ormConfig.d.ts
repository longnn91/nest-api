declare const mysqlConectionConfig: {
    type: string;
    host: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    synchronize: boolean;
    migrations: string[];
};
export default mysqlConectionConfig;
