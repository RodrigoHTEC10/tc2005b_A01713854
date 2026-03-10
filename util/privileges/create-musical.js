module.exports = (request, response, next) => {
    let continuar = true;
    for (let privilegio of request.session.privileges) {
        if (privilegio.name == 'create-musical') {
            console.log("Validated create musicals");
            continuar = false;
            next();
            
        }
    }
    console.log(continuar);
    if (continuar == true) {
        console.log("Invalidated create musicals");
        request.session.error = "Funcionalidad fuera de los privilegios del Usuario.";
        return response.redirect('/all');
    }
}