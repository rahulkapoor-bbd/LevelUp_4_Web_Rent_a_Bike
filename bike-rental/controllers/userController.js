const pool = require('../dbconnection/db');

const getUserInfo = (emailAddress) => {
    
    console.log(emailAddress);
    return new Promise((res, rej) => {
        pool.query(`SELECT firstname, lastname FROM users WHERE emailAddress  = ?`, [emailAddress], (error, results) => {
            if (error) {
                console.error('Error occured when executing query: ', error);
                rej(error);
                return;
            }
            const userInfo = results.map((row) => ({
                userId: row.userId,
                firstName: row.firstname,
                lastName: row.lastname
            }));
            console.log(results);
            res(userInfo);
        });
    });
};

const createNewUser = (firstname, lastname, emailAddress) => {
    return new Promise((res, rej) => {
        pool.query(`INSERT INTO users(firstname, lastname, emailAddress) VALUES (?, ?, ?)`, [firstname, lastname, emailAddress], (error) => {
            if (error) {
                console.error('Error occured when executing query: ', error);
                rej(error);
                return;
            }
            res(true);
        });
    });

};

module.exports = {
    getUserInfo,
    createNewUser,
};