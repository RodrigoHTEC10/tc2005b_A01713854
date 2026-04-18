/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 8th, 2026
Title: Previous Labs model.
*/
const db = require('../util/database.js');

async function getRecords(){
    return db.execute(`
        SELECT R.created_at AS time, R.name, A.name AS action, E.username AS user
        FROM record AS R
        INNER JOIN action AS A ON A.action_id = R.action_id
        INNER JOIN users AS E ON E.username_id = R.username_id;
    `);
}

module.exports = {
    getRecords
};