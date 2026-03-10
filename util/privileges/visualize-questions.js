module.exports = (request, response, next) => {
    let continuar = true;
    for (let privilegio of request.session.privileges) {
        if (privilegio.name == 'visuallize-questions') {
            next();
            continuar = false;
        }
    }
    if (continuar) {
        request.session.error = "Funcionalidad fuera de los privilegios del Usuario.";
        return response.redirect('/all');

    }
}