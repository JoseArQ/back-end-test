import mysql from 'mysql2';

const dbConnector = async () => {
    try {
        const mysqldb = await mysql.createConnection({
            host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
            user: 'bsale_test',
            password: 'bsale_test',
            database: 'airline'
        });
        console.log('Database connected');
        return mysqldb;
        
    } catch (error) {
        return {
            error
        }
    }
}