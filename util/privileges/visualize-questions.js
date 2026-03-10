module.exports = (request, response, next) => {
    let continuar = true;
    for (let privilegio of request.session.privileges) {
        if (privilegio.name == 'visuallize-questions') {
            console.log("Validated visuallize questions");
            continuar = false;
            next();
            
        }
    }
    console.log(continuar);
    if (continuar) {
        console.log("Invalidated visuallize questions");
        request.session.error = "Funcionalidad fuera de los privilegios del Usuario.";
        return response.redirect('/all');

    }
}