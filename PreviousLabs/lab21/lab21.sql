-- Author: Rodrigo Alejandro Hurtado Cortes
-- Title: Lab. 21
-- Date: March 23, 2026

USING rcostese


-- Consulta No.1
-- La suma de las cantidades e importe total de todas las entregas 
-- realizadas durante el 97.
SELECT SUM(cantidad) as "Total de Unidades", SUM(cantidad*(precio+impuesto)) as "Importe Total"
FROM materiales as M
INNER JOIN entregan as E ON M.clave=E.clave
WHERE fecha BETWEEN '01/01/1997' AND '31/12/1997'

-- Resultado obtenido:
-- Total de Unidades - Importe Total
-- 152 - 33440

-- ------------------------------------------------------------------
-- Consulta No.2
-- Para cada proveedor, obtener la razón social del proveedor, número
-- de entregas e importe total de las entregas realizadas.

SELECT P.razonsocial, COUNT(E.rfc) as "No. de entregas", SUM(E.cantidad*(M.precio+M.impuesto)) as "Importe total"
FROM proveedores as P
INNER JOIN entregan as E ON P.rfc=E.rfc
INNER JOIN materiales as M ON M.clave=E.clave
GROUP BY P.razonsocial

-- Resultado obtenido:

-- razonsocial - No. de entregas - Importe total
-- Alvin - 10 - 545134.7000417709
-- Cecoferre - 11 - 470547
-- Comex - 10 - 498987.5
-- La Ferre - 12 - 789431.5
-- La fragua - 12 - 1186955
-- Oviedo - 12 - 612397.5
-- Tabiquera del centro - 10 - 1501912.5
-- Tubasa - 10 - 1780410.5


-- ------------------------------------------------------------------
-- Consulta No.3
-- Por cada material obtener la clave y descripción del material, 
-- la cantidad total entregada, la mínima cantidad entregada, 
-- la máxima cantidad entregada, el importe total de las entregas 
-- de aquellos materiales en los que la cantidad promedio entregada
-- sea mayor a 400.

SELECT M.clave, M.descripcion, SUM(E.cantidad) AS "Cantidad total entregada", MIN(E.cantidad) AS "Minima cantidad entregada", MAX(E.cantidad) AS "Maxima cantidad entregada", SUM(E.cantidad*(M.precio+M.impuesto)) AS "Importe total"
FROM entregan as E
INNER JOIN materiales as M ON M.clave=E.clave
GROUP BY M.clave
HAVING SUM(E.cantidad) > 400 


-- Resultado obtenido:

-- clave - descripcion - Cantidad total entregada - Minima cantidad entregada - Maxima cantidad entregada - Importe total
-- 1000 - Varilla 3/16 - 419 - 165 - 254 - 46090
-- 1010 - Varilla 4/32 - 1051 - 523 - 528 - 132951.5
-- 1020 - Varilla 3/17- 590 - 8 - 582 - 84370
-- etc.

-- ------------------------------------------------------------------
-- Consulta No.4
-- Para cada proveedor, indicar su razón social y mostrar la cantidad 
-- promedio de cada material entregado, detallando la clave y descripción
-- del material, excluyendo aquellos proveedores para los que la cantidad
-- promedio sea menor a 500.

SELECT P.razonsocial, AVG(E.cantidad) as "Promedio de Entregas", M.clave, M.descripcion
FROM proveedores as P
INNER JOIN entregan as E ON P.rfc=E.rfc
INNER JOIN materiales as M ON M.clave=E.clave
GROUP BY M.clave
HAVING AVG(E.cantidad)>500


-- Resultado obtenido:

-- razonsocial - Promedio de Entregas - clave - descripcion
-- Oviedo - 525.5000 - 1010 - Varilla 4/32 
-- Comex - 563.0000 - 1050 - Varilla 4/34
-- Tabiquera del centro - 508.0000 - 1060 - Varilla 3/19
-- etc

-- ------------------------------------------------------------------
-- Consulta No.5
-- Mostrar en una solo consulta los mismos datos que en la consulta 
-- anterior pero para dos grupos de proveedores: aquellos para los 
-- que la cantidad promedio entregada es menor a 370 y aquellos para 
-- los que la cantidad promedio entregada sea mayor a 450.

SELECT P.razonsocial, AVG(E.cantidad) as "Promedio de Entregas", M.clave, M.descripcion
FROM proveedores as P
INNER JOIN entregan as E ON P.rfc=E.rfc
INNER JOIN materiales as M ON M.clave=E.clave
GROUP BY M.clave
HAVING AVG(E.cantidad)<370 OR AVG(E.cantidad)>450

-- Resultado obtenido:

-- razonsocial-Promedio de Entregas-clave-descripcion
-- La fragua-209.5000-1000-Varilla 3/16
-- Oviedo-525.5000-1010-Varilla 4/32
-- La Ferre-295.0000-1020-Varilla 3/17
-- etc.

-- ------------------------------------------------------------------
-- Agregar 5 nuevos materiales

INSERT INTO materiales(clave, descripcion,precio,impuesto,porcentajeImpuesto)
VALUES (2250, "Tornillo 1/2 P", 5, 1, 20.00),
(2260, "Tornillo 3/4 P", 7, 1, 14.28),
(2270, "Ladrillo Amarillo", 10, 1, 10.00),
(2280, "Cemento Cruz Roja", 15, 10, 66.66),
(2290, "Destornillador Phillips", 100, 25, 25.00);


-- ------------------------------------------------------------------
-- Consulta No.6
-- Clave y descripción de los materiales que nunca han sido entregados.
SELECT M.clave, M.descripcion
FROM materiales AS M
WHERE M.clave NOT IN (SELECT E.clave FROM entregan as E)

-- Resultado obtenido:

-- clave- descripcion
-- 2000- Jabón
-- 2250- Tornillo 1/2 P
-- 2260- Tornillo 3/4 P
-- 2270- Ladrillo Amarillo
-- 2280- Cemento Cruz Roja
-- 2290- Destornillador Phillips

-- ------------------------------------------------------------------
-- Consulta No.7
-- Razón social de los proveedores que han realizado entregas tanto al
-- proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT DISTINCT P.razonsocial
FROM proveedores as P
INNER JOIN entregan as E ON P.rfc=E.rfc
INNER JOIN proyectos as PR ON PR.numero=E.numero
WHERE PR.denominacion="Vamos México" AND E.rfc IN (
    SELECT E.rfc
    FROM entregan as E
    INNER JOIN proyectos as PR ON PR.numero=E.numero
    WHERE PR.denominacion='Querétaro Limpio')

-- Resultado obtenido:
-- La fragua

-- ------------------------------------------------------------------
-- Consulta No.8
-- Descripción de los materiales que nunca han sido entregados al 
-- proyecto 'CIT Yucatán'.

SELECT M.descripcion
FROM materiales as M
INNER JOIN entregan as E ON E.clave=M.clave
INNER JOIN proyectos as PR ON PR.numero=E.numero
WHERE PR.denominacion="CIT Yucatán"

-- Resultado obtenido:

-- descripcion
-- Varilla 3/18
-- Cantera gris
-- Recubrimiento P1019
-- Tubería 3.8

-- ------------------------------------------------------------------
-- Consulta No.9
-- Razón social y promedio de cantidad entregada de los proveedores 
-- cuyo promedio de cantidad entregada es mayor al promedio de la 
-- cantidad entregada por el proveedor con el RFC 'VAGO780901'.

SELECT P.razonsocial, AVG(E.cantidad) AS "Promedio"
FROM proveedores as P
INNER JOIN entregan as E ON P.rfc=E.rfc
GROUP BY P.razonsocial
HAVING AVG(E.cantidad) > (SELECT AVG(cantidad) FROM entregan WHERE rfc='FFFF800101')

-- Resultado obtenido:

-- razonsocial-Promedio
-- Alvin-353.9000
-- Cecoferre-324.0909
-- La Ferre-455.5000
-- La fragua-311.4167
-- Oviedo-354.5833
-- Tabiquera del centro-408.7000
-- Tubasa-333.3000

-- ------------------------------------------------------------------
-- Consulta No.10
-- RFC, razón social de los proveedores que participaron en el 
-- proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas
-- en el 2000 fueron mayores a las cantidades totales entregadas en 
-- el 2001.

SELECT P.rfc, P.razonsocial
FROM proveedores AS P
WHERE P.rfc IN (
    SELECT E.rfc
    FROM entregan AS E
    INNER JOIN proyectos AS PR ON PR.numero = E.numero
    WHERE PR.denominacion = 'Infonavit Durango'
    GROUP BY E.rfc
    HAVING 
        SUM(CASE 
            WHEN E.fecha BETWEEN '2000-01-01' AND '2000-12-31' 
            THEN E.cantidad ELSE 0 END
        ) >
        SUM(CASE 
            WHEN E.fecha BETWEEN '2001-01-01' AND '2001-12-31' 
            THEN E.cantidad ELSE 0 END
        )
);

-- Resultado obtenido:
-- rfc-razonsocial
-- GGGG800101-Tabiquera del centro
