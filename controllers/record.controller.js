const { response } = require('express');
const Record = require('../models/record.model');


exports.getRecords = (request,response,next) =>{
    Record.getRecords().then(([rows, fieldData])=>{
        return response.render('record.ejs',{
            records: rows,
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
            privileges:request.session.privileges || [],
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
}