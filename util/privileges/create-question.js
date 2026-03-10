module.exports = (request, response, next) => {
    let continuar = true;
    for (let privilegio of request.session.privileges) {
        if (privilegio.name == 'create-question') {
            console.log("Validated create questions");
            continuar = false;
            next();
            
        }
    }
    console.log(continuar);
    if (continuar) {
        console.log("Invalidated create questions");
        request.session.error = "Funcionalidad fuera de los privilegios del Usuario.";
        return response.redirect('/all');
    }
}