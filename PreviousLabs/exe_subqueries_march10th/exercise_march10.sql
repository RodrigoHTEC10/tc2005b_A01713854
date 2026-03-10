-- Author: Rodrigo Alejandro Hurtado Cortes
-- Date: March 10,2026
-- Title: 

--Ejemplo

SELECT descripcion
FROM Materiales
WHERE descripcion NOT IN 
    ( SELECT descripcion
    FROM Materiales
    INNER JOIN entregan ON Materiales.clave = entregan.clave)


SELECT descripcion
FROM Materiales
WHERE clave NOT IN (
    SELECT clave
    FROM Entregan)


SELECT descripcion
FROM Materiales M
WHERE NOT EXISTS(
    SELECT * 
    FROM Entregan AS E 
    WHERE E.clave = M.clave)

-- Película(título, año, duración, encolor, presupuesto, nomestudio, idproductor)
-- Elenco(título, año, nombre, sueldo)
-- Actor(nombre, dirección, telefono, fechanacimiento, sexo)
-- Productor(idproductor, nombre, dirección, teléfono)
-- Estudio(nomestudio, dirección)

-- 1.- Actrices de “Las brujas de Salem”.

SELECT *
FROM Elenco E
INNER JOIN Actor A ON E.nombre=A.nombre
WHERE A.sexo='female' AND E.titulo='Las brujas de Salem'

-- Subconsulta
SELECT E.nombre
FROM Elenco E
WHERE E.titulo='Las brujas de Salem' 
    AND E.nombre IN(
    SELECT A.nombre
    FROM actor A
    WHERE A.sexo='female')

-- 2.- Nombres de los actores que aparecen en películas producidas por MGM en 1995.

SELECT E.nombre
FROM elenco E
INNER JOIN pelicula P ON E.titulo=P.titulo
WHERE P.ano='1995'  AND P.nomestudio='MGM';

SELECT E.nombre
FROM Elenco E
WHERE E.ano=1995 AND E.titulo IN(
    SELECT P.titulo
    FROM pelicula P
    WHERE P.nomstudio='MGM');

-- 3.- Películas que duran más que “Lo que el viento se llevó” (de 1939).

SELECT P.titulo
FROM pelicula P
WHERE P.duracion <(
    SELECT duracion
    FROM Peliculas
    WHERE titulo='Lo que el viento se llevo'
    AND ano=1939);

-- 4.- Productores que han hecho más películas que George Lucas.

SELECT PR.nombre, COUNT(PR.id_productor) as 'Total de peliculas' 
FROM productor AS PR
INNER JOIN pelicula AS P ON PR.idproductor=P.idproductor
GROUP BY PR.nombre
HAVING COUNT(id_productor)>(
    SELECT COUNT(id_productor)
    FROM pelicula P
    INNER JOIN productor AS PR ON PR.idproductor=P.idproductor
    WHERE PR.nombre='George Lucas');

-- 5.- Nombres de los productores de las películas en las que ha aparecido Sharon Stone.

SELECT PR.nombre
FROM productor as PR
INNER JOIN pelicula P ON PR.idproductor=P.idproductor 
WHERE P.titulo IN (
    SELECT E.titulo
    FROM elenco E
    WHERE E.nombre='Sharon Stone');

SELECT PR.nombre
FROM productor as PR
INNER JOIN pelicula P ON PR.idproductor=P.idproductor 
INNER JOIN elenco E ON E.titulo=P.titulo AND E.anio=P.anio
WHERE E.nombre='Sharon Stone'; 

-- 6.- Título de las películas que han sido filmadas más de una vez

SELECT titulo, COUNT(titulo) as 'Cantidad de Veces Filmada'
FROM pelicula
GROUP BY titulo
HAVING COUNT(titulo) > 1;