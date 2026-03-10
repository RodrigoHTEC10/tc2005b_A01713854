module.exports = (request, response, next) => {
    let continuar = true;
    for (let privilegio of request.session.privileges) {
        if (privilegio.name == 'visuallize-musicals') {
            console.log("Validated visualize musicals");
            continuar = false;
            next();
            
        }
    }
    console.log(continuar);
    if (continuar) {
        console.log("Invalidated visualize musicals");
        request.session.error = "Funcionalidad fuera de los privilegios del Usuario.";
        return response.redirect('/all');
    }
}