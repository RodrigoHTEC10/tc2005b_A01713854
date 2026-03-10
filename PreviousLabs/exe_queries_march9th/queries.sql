--- Author: Rodrigo Alejandro Hurtado Cortes
--- Date: March 9th, 2026

-- Base de datos de prueba.
-- Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
-- Elenco (título, año, nombre, sueldo)
-- Actor (nombre, dirección, telefono, fechanacimiento, sexo)
-- Productor (idproductor, nombre, dirección, teléfono)
-- Estudio (nomestudio, dirección)

-- El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.

SELECT E.nombre, SUM(E.sueldo) as 'Ingreso total'
FROM elenco as E
GROUP BY E.nombre
ORDER BY SUM(E.sueldo) DESC

-- El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.

SELECT noestudio, SUM(presupuesto)
FROM pelicula
WHERE año BETWEEN 1980 AND 1990
GROUP BY noestudio
ORDER BY SUM(presupuesto) DESC

-- Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película.

SELECT E.nombre, AVE(E.sueldo)
FROM elenco as E
INNER JOIN actor as A ON E.nombre = A.nombre
WHERE A.sexo = "male"
GROUP BY E.nombre
HAVING AVG(sueldo) > 5000000
ORDER BY AVG(sueldo) DESC

-- Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto).

SELECT P.titulo, P.año, MIN(P.presupuesto) AS 'Presupuesto min de peliculas'
FROM pelicula as P
GROUP BY P.titulo
ORDER BY MIN(P.presupuesto) DESC

-- Mostrar el sueldo de la actriz mejor pagada.

SELECT MAX(E.sueldo)
FROM elenco as E
INNER JOIN actor as A ON E.nombre = A.nombre
WHERE A.sex = "female"