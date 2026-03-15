module.exports = (request, response, next) => {
    if(request.session.isSpecialUser){
        response.locals.usernameColor = true;
    } else {
        response.locals.usernameColor = false;
    }
    next();
}