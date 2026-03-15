# Laboratories | Personal Repository | Rodrigo Hurtado [A01713854]

**Repository**: tc2005b_A01713854

**Author**: Rodrigo Alejandro Hurtado Cortes [A01713854]

**Date**: March 15th, 2026

## Description

The current repository is the compilation of the competences demostration of knowledge acquired from the class Software Construction & Decision Making.

Through these Laboratories, each branch and update of the project widers the tools, technologies and purpose of the project, making it a combination as the skillset of the author grows, slowly shifting away from the initial design and tools.

Until Lab20 the project shows the usage of:
- HTML, CSS, JS
- Node.js
- Express
    - bcrypt
    - csufr
    - body-parser
    - connect-flash
    - cookie-parser
    - dotenv
- Database Management (Usage of SQL)
    - mysql2
- Implementation of the MVC arquitecture.
- Usage of ejs
- Implementation of middlewares
- Implementation of RBAC

## Project decomposition

The current project is composed of the following sections:
- Home Page (Collection of all following sections)
1. Musicals 

        1.1. Visualization 
        1.2. Creation (Creation)

2. Questions 

        2.1 Visualization
            2.1.1 All Questions
            2.1.2 Dinamically through lab: lab01-lab20
            2.1.3 Dinamically through question number: 1-37
        2.2 Creation (Admin)
        2.3 Edition (Admin)
        2.4 Deletion (Admin)

3. Abilities

        3.1 Visualization

4. Interests

        4.1 Visualization

5. Previous Labs 

        5.1 Only available through routes.

### RBAC Implementation
Currently only there are two roles in the RBAC:
1. Reader
2. Admin

Any account created through the <code>Sign In</code> functionallity will be automatically assigned a Reader role.

To consult any Administrator functionallity use:

    Username: Rodrigo 
    Password: 123

## Available routes

- /all (Auth)
- /users/login
- /users/signin
- /users/logout
- /musicals/list (Auth)
- /musicals/form (Admin)
- /abilities/list (Auth)
- /interests/text (Auth)
- /prev/lab01 (Auth)
- /prev/lab03 (Auth)
- /prev/lab04 (Auth)
- /prev/lab05 (Auth) 
- /prev/lab06 (Auth)
- /questions/all (Auth)
- /questions/:lab## (from lab01-lab19) (Auth)
- /questions/id/:## (from 1-37) (Auth)
- /questions/form (Admin)
- /questions/edit/:id (from 1-37) (Admin)
- /questions/delete/:id (from 1-37) (Admin)

## References
As some questions are answered after each Laboratory (which can be consulted in the following routes: /all, /questions/all, questions/[lab##]), the references of them are presented below.

- Array. (s/f). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

- Copes, F. (2019, julio 23). The HTML handbook – learn HTML for beginners. Freecodecamp.org. https://www.freecodecamp.org/news/the-html-handbook/

- Date. (s/f). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


- Difference between internet and WWW. (2020, octubre 25).    GeeksforGeeks. https://www.geeksforgeeks.org/computer-networks/difference-between-internet-and-www/

- Difference between java and JavaScript. (2018, junio 19). GeeksforGeeks. https://www.geeksforgeeks.org/javascript/difference-between-java-and-javascript/

- Etiquetas HTML obsoletas. (s/f). Lenguajehtml.com. Recuperado el 10 de febrero de 2026, de https://lenguajehtml.com/html/documento/etiquetas-html-obsoletas/

- Node.js package.json. (s/f). W3schools.com. https://www.w3schools.com/nodejs/nodejs_package_json.asp

- freeCodeCamp. (2019, septiembre 11). An introduction to HTTP: everything you need to know. Freecodecamp.org. https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/

- reeCodeCamp. (2022, enero 26). HTTP request methods – get vs put vs post explained with code examples. Freecodecamp.org. https://www.freecodecamp.org/news/http-request-methods-explained/

- HTML table borders. (s/f). W3schools.com. Recuperado el 10 de febrero de 2026, de https://www.w3schools.com/html/html_table_borders.asp

- HTML tables. (s/f). W3schools.com. Recuperado el 10 de febrero de 2026, de https://www.w3schools.com/html/html_tables.asp

- HTML5 vs. HTML4: ¿Cuál es la diferencia? (s/f). desarrolladoraweb.com. Recuperado el 10 de febrero de 2026, de https://desarrolladoraweb.com/blog/html5-vs-html4-cual-es-la-diferencia

- HTTP response status codes. (s/f). MDN Web Docs. Recuperado el 10 de febrero de 2026, de https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

- Loire, C. (2024, noviembre 24). Ciclo de Vida Informático: Etapas y Mejores Prácticas. Evernex. https://evernex.com/es/guia-del-mercado/ciclo-de-vida-informatico/

- Validación de formularios de datos. (s/f). MDN Web Docs.https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation

- What are template engines in Express, and why are they used? (2024, enero 23). GeeksforGeeks. https://www.geeksforgeeks.org/node-js/what-are-template-engines-in-express-and-why-are-they-used/

- What is material design? (2023, octubre 19). GeeksforGeeks. https://www.geeksforgeeks.org/websites-apps/what-is-material-design/

- What is MVC? Advantages and Disadvantages of MVC. (2024, octubre 9). ALexHost SRL; AlexHost. https://alexhost.com/faq/what-is-mvc-advantages-and-disadvantages-of-mvc/

- (S/f). Amazon.com. Recuperado el 10 de febrero de 2026, de https://aws.amazon.com/es/what-is/sdlc/

- (N.d.-b). Cloudflare.com. Retrieved February 12, 2026, from https://www.cloudflare.com/learning/performance/how-to-minify-css/
