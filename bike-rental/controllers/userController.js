const pool = require('../dbconnection/db');

const getUserInfo = (emailAddress) => {
    return new Promise((res, rej) => {
        pool.query(`SELECT userId, firstname, lastname FROM users WHERE emailAddress  = ?`, [emailAddress], (error, results) => {
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
            res(userInfo);
        });
    });
};

/*const createNewUser = (firstname, lastname, emailAddress) => {
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
};*/

const removeUser = (emailAddress) => {
    return new Promise((res, rej) => {
        pool.query(`DELETE FROM users WHERE emailAddress = ?`, [emailAddress], (error) => {
            if (error) {
                console.error('Error occured when executing query: ', error);
                rej(error);
                return;
            }
            res(true);
        });
    });
};

/*Can still change. This only implements the updating of user information but requires them to add all information. 
Meaning if they only want to update their email, they will have to enter their first and last names*/
const updateUser = (oldEmail, firstname, lastname, emailAddress) => {
    return new Promise((res, rej) => {
        pool.query(`UPDATE users SET firstname = ?, lastname = ?, emailAddress = ? WHERE emailAddress = ?`, [firstname, lastname, emailAddress, oldEmail], (error) => {
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
    //createNewUser,
    removeUser,
    updateUser,
};