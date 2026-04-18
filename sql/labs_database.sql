-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2026 at 06:06 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `labs_database`
--
CREATE DATABASE IF NOT EXISTS `labs_database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `labs_database`;

-- --------------------------------------------------------

--
-- Table structure for table `musicals`
--

CREATE TABLE `musicals` (
  `musical_id` int(11) NOT NULL,
  `username_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(500) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `musicals`
--

INSERT INTO `musicals` (`musical_id`, `username_id`, `name`, `image`, `created_at`) VALUES
(1, 1, 'Hamilton', 'https://tse4.mm.bing.net/th/id/OIP.wKjelyRrowRDjBDLAmmMbAHaHa?pid=Api&P=0&h=220', '2026-03-08 22:24:02'),
(2, 1, 'EPIC', 'https://m.media-amazon.com/images/M/MV5BYjViOTY5MGEtOTVmYS00ODc0LTgyZjktZjU1MmZjZjRlZjBiXkEyXkFqcGc@._V1_.jpg', '2026-03-08 22:24:02'),
(3, 1, 'Sweeney Todd. The demon barber of Fleet Street', 'https://i.scdn.co/image/ab67616d0000b273bca2a67b5ca9d790c55299e3', '2026-03-08 22:24:02'),
(4, 1, 'Wicked', 'https://m.media-amazon.com/images/I/61KnhHzI8eL._UF1000,1000_QL80_.jpg', '2026-03-08 22:24:02'),
(5, 1, 'Ryde The Cyclone', 'https://tse3.mm.bing.net/th/id/OIP.rU8HMBxmUoM3Gpxr9SuExQHaEK?pid=Api&P=0&h=220', '2026-03-08 22:24:02'),
(6, 1, 'The Greatests Showman', 'https://upload.wikimedia.org/wikipedia/en/1/10/The_Greatest_Showman_poster.png', '2026-03-08 22:24:02'),
(7, 1, 'Matilda The Musical', 'https://m.media-amazon.com/images/M/MV5BOTFhYjc5NDUtODYyZi00NzFlLWJhYTEtNWZiZjIxYzU0N2U3XkEyXkFqcGc@._V1_.jpg', '2026-03-08 22:24:02'),
(8, 1, 'The Phantom of the Opera', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuCERc8tz1JuXY0IWPC3e0zFYLUev1zqtdg&s', '2026-03-09 23:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `otorga`
--

CREATE TABLE `otorga` (
  `username_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `otorga`
--

INSERT INTO `otorga` (`username_id`, `role_id`) VALUES
(2, 1),
(12, 2),
(6, 1),
(34, 2);

-- --------------------------------------------------------

--
-- Table structure for table `privilege`
--

CREATE TABLE `privilege` (
  `privilege_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `privilege`
--

INSERT INTO `privilege` (`privilege_id`, `name`) VALUES
(1, 'create-musical'),
(2, 'create-question'),
(3, 'visuallize-musicals'),
(4, 'visuallize-questions');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `username_id` int(11) NOT NULL,
  `question` varchar(250) NOT NULL,
  `answer` text NOT NULL,
  `label` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `username_id`, `question`, `answer`, `label`, `created_at`) VALUES
(1, 1, '¿Cuál es la diferencia entre Internet y la World Wide Web?', '<p>El <strong>Internet</strong> es la red global de sistemas interconectados, la cual es dependiente del hardware, sobre la cual funciona la WWW.</p><p>La <strong>WWW (World Wide Web)</strong> es la colección de información que puede ser accesada a través del Internet; su enfoque es más software que el Internet.</p>', 'lab01', '2026-03-08 22:24:02'),
(2, 1, '¿Cuáles son las partes de un URL?', '<p>Las partes de un URL (Uniform Resource Locator) son:</p><ol><li>Protocol: Usualmente HTTP o HTTPS, tambien puede ser FTP (File Transfer Protocol) o SMTP (Simple Mail Transfer Protocol).</li><p>Es seguro (HTTPS) ya que las requests son completamente cifradas.</p><li>Domain: Nombre empleado para identificar uno o mas direcciones IP donde esta almancenado el recurso a obtener.</li><li>Path: Ubicación concreta del recurso dentro del servidor.</li><li>Parameters: Información adicional para identificar o filtrar información del servidor.</li><p>Anteriormente era posible añadir un puerto PORT el cual hacia referencia al puerto a traves del cual se entrega o recibe información. Actualmente son lógicas y no físicas.</p></ol>', 'lab01', '2026-03-08 22:24:02'),
(3, 1, '¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?', '<p>HTTP es un protocolo de comunicación.</p><ol><li>GET: Solicita información al servidor para su lectura y/o uso.</li><li>HEAD: Se emplea antes de un método GET para comprobar que el recurso a comprobar esta presente.</li><li>POST: Envia datos para crear un recurso en el servidor de forma cifrada.</li><li>PUT: Envia datos para modificar un recurso en el servidor.</li><li>PATCH: Envia datos y aplica modificaciones parciales a un recurso en el servidor.</li><li>DELETE: Elimina un recurso del servidor.</li></ol>', 'lab01', '2026-03-08 22:24:02'),
(4, 1, '¿Qué método HTTP se debe utilizar al enviar un formulario HTML? ¿Por qué?', '<p>POST seria el método adecuado, ya que de esta forma la información debe estar en el cuerpo de la petición y no seria visible ni se guardaria dentro del historial de los navegadores; haciendo mas seguro el envio de datos tan restringidos.</p>', 'lab01', '2026-03-08 22:24:02'),
(5, 1, '¿Qué método HTTP se utiliza cuando se accede a una página mediante una URL?', '<p>GET, ya que la solicitud se realiza para obtener los archivos y recursos propios de la página cuya URL ha sido utilizada.</p>', 'lab01', '2026-03-08 22:24:02'),
(6, 1, 'Un servidor web devuelve código HTTP 200. ¿Qué significa?', '<p>Significa que la petición ha sido exitosa, de modo que no ha ocurrido ningun error.</p>', 'lab01', '2026-03-08 22:24:02'),
(7, 1, '¿Es responsabilidad del desarrollador corregir un error 404?', '<p>Si, ya que la respuesta 404 indica una petición incorrecta hecha por el usuario al servidor o bien la informacion solicitada no existe; de modo que es responsabilidad del desarrollador formular correctamente la petición al servidor solicitado para que esta sea exitosa.</p><p>De forma adicional, el error 403 se refiere a un intento de acceder a un contenido prohibido o protegido.</p>', 'lab01', '2026-03-08 22:24:02'),
(8, 1, '¿Es responsabilidad del desarrollador corregir un error 500?', '<p>No, ya que una respuesta 500 indica que ocurrio un error dentro del servidor. Dado que el servidor fue el que tuvo el error, el desarrollador tiene responsabilidad en ello. El proyecto debe estar libre de errores 500.</p>', 'lab01', '2026-03-08 22:24:02'),
(9, 1, '¿Qué significa que un atributo HTML esté deprecated?', '<p>Significa que las funciones de dicho atributo o etiqueta han sido substituidas por herramientas mejores (generalmente estilos de CSS o nuevas etiquetas de HTML) y que el soporte oficial sera descontinuado sobre las mismas.</p><p>Algunos de estos atributos son:</p><ul><li>&lt;acronym&gt;</li><li>&lt;bgsound&gt;</li><li>&lt;big&gt;</li><li>&lt;center&gt;</li></ul>', 'lab01', '2026-03-08 22:24:02'),
(10, 1, '¿Cuáles son las diferencias entre HTML4 y HTML5?', '<p>HTML4 era aun una version del HTML original expandida (1997); sin embargo, HTML5 es una compilación de HTML, APIs y estandares como WebGL y SVG (2019).</p><p>Entre las ventajas del HTML5 incluye nuevas etiquetas, mejor compatibilidad con navegadores actuales, soporte de contenido multimedia, formularios mejorados y conexión con nuevas APIs.</p>', 'lab01', '2026-03-08 22:24:02'),
(11, 1, '¿Qué componentes tiene una tabla HTML?', '<p>La tabla es inicializada con la etiqueta &lt;table&gt;. Posteriormente se definen las filas de la tabla como &lt;tr&gt; dentro de las cuales se deben definir cada una de las columnas con sus datos concretos dentro de &lt;td&gt;.</p><p>En caso de querer resaltar ciertas celdas, estas se puede colocar como encabezados con la etiqueta &lt;th&gt;.</p><p>Etiquetas de estilo adicionales:</p><ul><li>border: [1px black] Establece un borde del ancho y color establecidos dentro de cada celda de la tabla.</li><li>border-collapse: <ul><li>[separate] Establece bordes por cada celda.</li><li>[collapse] Une los bordes de las celdas contiguas.</li></ul></li><li>background-color: Color dentro de las celdas.</li><li>border-radius: Radio del borde dentro de las celdas.</li><li>border-style: Estilo de los bordes los cuales pueden ser: <ul><li>dotted</li><li>dashed</li><li>solid</li><li>double</li><li>groove</li><li>ridge</li></ul></li><li>border-color: Color de los bordes.</li></ul>', 'lab01', '2026-03-08 22:24:02'),
(12, 1, '¿Cuáles son los principales controles de una forma HTML5?', '<p>Los controles o elementos que permiten al usuario interactuar con la página web dentro de HTML5 son generalmente los elementos &lt;input&gt; con diferentes tipos, entre los cuales se encuentran:</p><ul><li>text</li><li>email</li><li>password</li><li>number</li><li>date</li><li>time</li><li>checkbox</li><li>color</li><li>file</li></ul>', 'lab01', '2026-03-08 22:24:02'),
(13, 1, '¿Qué tanto soporte HTML5 tiene tu navegador?', '<p>Google Chrome</p><p>Puntaje 526/555</p>', 'lab01', '2026-03-08 22:24:02'),
(14, 1, '¿Cuál es el ciclo de vida de los sistemas de información?', '<p>El ciclo de vida de un sistema informático corresponde al proceso completo desde el cual un sistema es planificado hasta que es desechado. Sus fases principales corresponden a:</p><ol><li>Planificación</li><aside>Identificación de nuestras necesidades, presupuesto y tiempo disponible.</aside><li>Implementación / Diseño</li><aside>Configuración del sistema y despliege inicial.</aside><li>Operación / Ejecución</li><aside>Uso de los sistemas, mantenimiento preventivo y soporte técnico.</aside><li>Actualización / Optimización</li><aside>Sustitución de componentes, mejoras de software y ampliación de capacidades.</aside><li>Retiro / Finalización</li><aside>Retirada de los equipos y software.</aside></ol>', 'lab01', '2026-03-08 22:24:02'),
(15, 1, '¿Cuál es el ciclo de desarrollo de sistemas?', '<p>Es el proceso empleado por los equipos de desarrollo para diseñar y crear software dentro del tiempo, presupuesto y cumpliendo con las expectativas de uso del cliente. Este se compone de:</p><ol><li>Planificación</li><aside>Consiste en el análisis de los costos, actividades a realizar, recursos disponibles, asignación de los mismos y beneficios a obtener con el fin de declararlos en un documento de requisitos de software.</aside><li>Diseño</li><aside>Análisis de requisitos e identificación de las mejores soluciones para crear el software.</aside><li>Implementación</li><aside>Codificación del producto por el equipo de desarrollo.</aside><li>Pruebas</li><aside>Combinación de pruebas manuales y automáticas para comprobar si el software tiene errores y si cumple con los requerimientos del cliente.</aside><li>Despliegue</li><aside>Llevar el software a un entorno de compilación y entorno de producción diferenciados para garantizar que el cliente tendra acceso al producto.</aside><li>Mantenimiento</li><aside>Corrección de errores, resolución de problemas de los clientes y administración de cambios hechos al software.</aside></ol>', 'lab01', '2026-03-08 22:24:02'),
(16, 1, 'Como ingeniero de software ¿recomiendas usar !important en CSS?', '<p>Se recomienda evitar el uso de !important ya que a pesar de su gran utilidad para generar excepciones en el estilo de cierto elemento; este rompe el esquema de cascada de la hoja de estilos en CSS haciendo más dificil una posterior detección de errores o correcciones.</p>', 'lab03', '2026-03-08 22:24:02'),
(17, 1, 'Si se pone una imagen de fondo en HTML ¿por qué debe escogerse con cuidado?', '<p>Ya que la selección de la imagen correcta debido a su tamaño (número de pixeles) afecta tanto a su visualización como a el tiempo de carga de la página.</p><p>Cuanto mas grande sea la imagen mejor se vera (indepenedientemente del espacio en el que sea mostrada); sin embargo, esto hace que la página sea más lenta al cargar.</p><p>Por el otro lado, si la imagen es muy pequeña y se distribuye en un area mayor, esta se vera borrosa y pixeleada; a pesar de que pueda cargar más rapido.</p><p>De modo que para la selección de una imagen como fondo de pantalla hay que considerar:</p><ul><li>El espacio donde se mostrara esta imagen.</li><li>El tamaño de la imagen.</li><li>El tiempo de carga de la página.</li></ul>', 'lab03', '2026-03-08 22:24:02'),
(18, 1, '¿Qué unidades se recomiendan entre %, px y pt?', '<p>Depende de la propiedad misma a la cual se desea definir dimensiones o proporciones, ya que actualmente las recomendaciones en el diseño de paginas web sugieren los siguientes usos para las unidades antes mencionadas:</p><ul><li><strong>%:</strong> Uso para elementos que se adapten segun el tamaño del padre.</li><li><strong>px:</strong> Uso para bordes, sombras pequeñas y detalles que no necesitan escalarse indepenedientemente del dispositivo donde sean mostrados.</li><li><strong>pt:</strong> No se recomienda ya que es una medida propia de medios impresos.</li></ul>', 'lab03', '2026-03-08 22:24:02'),
(19, 1, '¿Por qué minimizar CSS mejora el rendimiento?', '<p>Esto se debe a la forma en la que una página carga dentro de un navegador, ya que es necesario que el navegador interprete tanto los archivos HTML como las hojas de estilos CSS con el fin de mostrar la página al usuario.</p><p>La minimización del una hoja de estilos implica la eliminación de espacios y comentarios dentro del CSS lo que implica una lectura más rapida del código por parte del navegador, reduciendo el tiempo de carga a coste de hacer este código menos legible al ojo humano.</p>', 'lab03', '2026-03-08 22:24:02'),
(20, 1, '¿Qué diferencias hay entre Java y JavaScript?', '<p>Similitudes:</p><ul><li>Ambos poseen sintaxis inspiradas en C.</li><li>Son lenguages que soportan el paradigma de programación orientada a objetos (Aunque Java es creado enteramente para ello).</li><li>Ambos soportan el paradigma funcional (Más notorio en JS).</li><li>Ambos son multiplataformas.</li></ul><p>Diferencias:</p><ul><p>Java:</p><ul><li>Tipado estático.</li><li>Requiere compilación.</li><li>Empleado en backend y desarrollo de aplicaciones.</li></ul><p>JavaScript:</p><ul><li>Tipado dinámico.</li><li>No requiere compilación, es interpretado.</li><li>Empleado para desarrollo web.</li></ul></ul>', 'lab04', '2026-03-08 22:24:02'),
(21, 1, '¿Qué métodos tiene el objeto Date?', '<ul><li>Date(): Cuando es llamado como una función, retorna una cadena que representa la fecha y hora actual, exactamente como lo hace new Date().toString().</li><li>now(): Devuelve el valor númerico correspondiente al actual número de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC, ignorando los segundos intercalares.</li><li>prototype.getDate(): Retorna el día del mes (1–31) para la fecha especificada acorde a la hora local.</li><p>Se plantea mismo uso para getDay(), getHours(), getMonth(), getFullYear(), etc.</p><li>prototype.toDateString(): Retorna la \"fecha\" del objeto Date como una cadena facil de leer por humanos \"Thu Apr 12 2018\".</li><li>Date.prototype.toJSON(): Retorna una cadena representando el objeto Date usando toISOString(). Destinado a ser usado por JSON.stringify().</li></ul>', 'lab04', '2026-03-08 22:24:02'),
(22, 1, '¿Qué métodos tienen los arreglos?', '<ul><li>length(): Devuelve el numero de elementos o espacios reservados dentro del Array.</li><li>pop(): Elimina el ultimo elemento del Array.</li><li>slice(): Genera una copia del array.</li><li>prototype.join(): Concatena en un string todos los elementos de un array.</li><li>prototype.reverse(): Invierte el orden de los elementos de un array en el propio array. Este método modifica el array.</li></ul>', 'lab04', '2026-03-08 22:24:02'),
(23, 1, '¿Cómo se declara una variable con alcance local dentro de una función?', '<p>Se declara como <code>let</code>.</p>', 'lab04', '2026-03-08 22:24:02'),
(24, 1, '¿Qué implicaciones tiene utilizar variables globales dentro de funciones?', '<p>Que estas variables seguiran existiendo fuera de su alcance (las ultimas llaves en donde fue creado {}). Esto puede llevar a la modificación de las mismas por parte de usuarios en la consola si estas no han sido declaradas como constantes, poniendo el riesgo el funcionamiento del script.</p>', 'lab04', '2026-03-08 22:24:02'),
(25, 1, 'Describe Material Design.', '<p>Es un sistema de diseño abierto al público (open-sourced) diseñado por Google para dar un lenguaje de consistencia y especificidad a sus productos; formado por una combinación de reglas, estandares y componentes que forman el orden de diseño de cualquier aplicación.</p><p>La última versión de este sistema es el m3 y puede ser consultada en este <a href=\"https://m3.material.io/\">link.</a></p>', 'lab05', '2026-03-08 22:24:02'),
(26, 1, '¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?', '<ul><li>Experiencia de usuario: Ya que la validacion es instantanea el usuario recibe una respuesta inmediatamente en caso de que el input sea valido o no.</li><li>Se evitan peticiones innecesarias al servidor.</li><li>El tiempo de respuesta es menor.</li><li>Se puede configurar de mejor forma los mensajes de error obtenidos.</li></ul>', 'lab06', '2026-03-08 22:24:02'),
(27, 1, '¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?', '<p>Existen diferentes formas de desabilitarlo:</p><ul><li>Desabilitar JavaScript completamente del navegador.</li><li>Modificar el DOM a través de las herramientas del desarrollador (DevTools).</li><li>Enviando la petición directamente.</li><li>Interceptando y modificando la petición.</li><li>Manipulando al sobreescribir las funciones directamente sobre la consola del navegador.</li></ul>', 'lab06', '2026-03-08 22:24:02'),
(28, 1, 'Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?', '<p>Por que estas verificaciones se mantienes correctas y beneficiosas para la gran mayoria de los usuarios de la aplicación. Además, estos mejoran la experiencia del usuario en terminos generales, independientemente de la seguridad que estos puedan o no generar.</p>', 'lab06', '2026-03-08 22:24:02'),
(29, 1, 'Describe el archivo package.json', '<p>Es un archivo de configuración central de cualquier proyecto. Este describe que es, que necesita para funcionar y como ejecutarse. Cuando es leido por una computadora diferente, esta descarga todas las dependencias necesarias para su funcionamiento. Esta compuesto de:</p><ul><li>name</li><li>version</li><li>description</li><li>main: Archivo de entrada que es ejecutado primero</li><li>scripts: Comandos personalizados</li><li>dependencies</li><li>devDependencies</li>', 'lab11', '2026-03-08 22:24:02'),
(30, 1, '¿Qué templating engines existen para Node?', '<ul><li>Pug: sintaxis propia</li><li>Handlebard: Usa {{ }} y limita la lógica dentro del HTML</li><li>Nunjucks:Desarrollado por Mozilla y bueno para proyectos grandes.</li><li>Mustache</li></ul>', 'lab12', '2026-03-08 22:24:02'),
(31, 1, '¿Qué beneficios tiene MVC?', '<ul><li>Separación de responsabilidades: Cada cada es responsable de un funcionamiento en concreto; dirección, vista generada para el usuario y lógica.</li><li>Mantenibilidad: Ante la separación de capas hay una mayor facilidad para cambiar o mejorar ciertas areas sin afectar al resto de las funcionalidades.</li><li>Reutilización de código: Más evidente en las vistas y los componentes en los que estas se pueden dividir.</li><li>Desarrollo en conjunto: La separación de las capas permite a desarrolladores trabajar en distintas áreas a la vez.</li>     <li>Escalabilidad: Ya que cada capa puede evolucionar de forma independiente a las otras.</li> </ul>', 'lab14', '2026-03-08 22:24:02'),
(32, 1, '¿Qué desventajas tiene MVC?', '<p>A pesar de las ventajas antes mencionadas, a través de la investigación del modelo se pueden encontrar las siguientes desventajas o puntos débiles a considerar durnate su uso:</p> <ul>     <li>Complejidad innecesaria en proyectos pequeños.</li>     <li>Si la lógica detras de una capa aumenta es posible tener una sobrecarga de código en los controllers, lo que va en contra del principio de la responsabilidad única que delega su separación inicial.</li> <li>Problemas de rendimiento ya que las capas intermedias del modelo pueden inducir latencia conforme la complejidad aumente.</li> </ul>', 'lab14', '2026-03-08 22:24:02'),
(33, 1, '¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?', '<p>Al mantener las conexiones a la base de datos dentro de una única capa es posible realizar modificaciones a las peticiones de obtención, edición o eliminación sin comprometer la funcionalidad completa de la aplicación, ya que los métodos se mantienen y la lógica interna de base de datos se mantienen aislada del funcionamiento de la aplicación.</p>', 'lab17', '2026-03-08 23:26:47'),
(34, 1, '¿Qué es SQL injection y cómo se puede prevenir?', '<p>SQL Injection corresponde al ataque a la base de datos de aplicaciones web a traves del envio de comandos de SQL a traves de formularios de tipo text que vayan a almacenarse a base de datos sin asegurarlos en el camino.</p> <p>Estos ataques se pueden prevenir a traves de la limpieza de los datos antes de colocarlos dentro del comando a SQL desde el modelo de la aplicación web.</p>', 'lab17', '2026-03-08 23:28:37'),
(35, 1, '¿Qué otras formas de autentificación existen?', '<p>De forma adicional al nombre de usuario y contraseña tradicionales otras formas de autentificarse (independientemente de los recursos externos o hardware adicional requerido) son:</p> <ul>     <li>PIN / Código numérico</li>     <li>Passkeys</li>     <li>OAuth 2.0 - Framework de autorizacion delegada.</li>     <li>API Keys</li>     <li>Bearer Tokens / Access Tokens</li>     <li>TOTP- Codigo temporal basado en tiempo</li>     <li>SMS/Email OTP - Codigos de un solo uso</li>     <li>Push notification - Dispositivo movil aprueba o rechaza el login</li>     <li>Llaves de Hardware</li>     <li>Biométricas - Huella dactilar / Face ID / Reconocimiento de voz</li>     <li>Magic links - Enlaces de uso único</li> </ul>', 'lab18', '2026-03-13 19:35:00'),
(36, 1, '¿En qué consiste el control de acceso basado en roles?', '<p>Es un modelo de seguridad que regula el acceso a recursos de un sistema asignando privilegios a roles y asignando estos roles a los individuos. De esta forma llevar control sobre un conjunto especifico de privilegios es mas sencillo al asignarlos en bloques concretos a usuarios. </p> <p>Este modelo se basa generalmente en la distribucion de responsabilidades y autorizaciones que poseen diversos rangos dentro de un mismo conjunto; regula el interior del sistema, no el exterior. Adicionalmente, esta basado en el principio del minimo privilegio y reduce la probabilidad de errores ante su uso.</p>', 'lab19', '2026-03-13 19:35:26'),
(37, 1, 'Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. Realicen un análisis de las ventajas y desventajas de cada uno con respecto al control de acceso.', '<p>Sistema con RBAC: Sistemas Medicos</p> <p>El acceso a la informacion de los pacientes dentro de un sistema médico esta regulado por RBAC donde segun el rol se otorgan los permisos de acceso y modificación de la información:</p> <ul>     <li>Doctores: Maneja acceso completo y modificación de la información.</li>     <li>Enfermer@s: Maneja un acceso preeliminar a información general y puede editar algunos campos generales como signos vitales</li>     <li>Recepcionistas: Manejan las citas, más no la información de los clientes.</li>     <li>Administradores: Controlan las configuraciones del sistema.</li> </ul> <p>Sistema sin RBAC: Sistema de Manejo de Archivos de Windows / Linux</p> <p>Los cuales basan su seguridad con Access Control Lists (ACLs). Cada ACL tiene entradas que definen que usuario tiene acceso a un recurso especifico y los privilegios que tiene sobre el. A diferencia del RBAC esta ligando los privilegios directamente al usuario evitando los roles intermedios.</p>', 'lab19', '2026-03-13 19:35:58');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `name`) VALUES
(1, 'administrador'),
(2, 'lector');

-- --------------------------------------------------------

--
-- Table structure for table `tiene`
--

CREATE TABLE `tiene` (
  `privilege_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tiene`
--

INSERT INTO `tiene` (`privilege_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(3, 2),
(4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username_id` int(11) NOT NULL,
  `username` varchar(300) NOT NULL,
  `password` varchar(500) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username_id`, `username`, `password`, `nombre`, `created_at`) VALUES
(1, 'RodrigoHTEC10', 'serpiente', 'Rodrigo', '2026-03-08 22:24:02'),
(2, 'Rodrigo', '$2b$12$ZIwACOdl9g8B/9yYz12GX.i3s3Wr6OqnT0VSdkb9qc5PVssUQTk/u', 'Rodrigo Hurtado', '0000-00-00 00:00:00'),
(6, 'nickavh_606', '$2b$12$bzPHB9Z5wRyr7lmlTaF5g.Xt0Ys7F.IC0ZRujDKmqOBMi9Pz1qoVS', 'Nico', '0000-00-00 00:00:00'),
(12, 'juan', '$2b$12$Geqf/ejWaTr7mDcduA0bYO4P/l2oM2vVjwnZ7NxdfeiirAwpapuSy', 'juan', '0000-00-00 00:00:00'),
(34, 'iii', '$2b$12$I22KaiTVIeRce2tYqiZUL.8MbdGYKXW3SYaN1Om9hf5R1OBL9SHyq', 'iii', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `musicals`
--
ALTER TABLE `musicals`
  ADD PRIMARY KEY (`musical_id`),
  ADD KEY `username_id` (`username_id`);

--
-- Indexes for table `otorga`
--
ALTER TABLE `otorga`
  ADD KEY `username_id` (`username_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `privilege`
--
ALTER TABLE `privilege`
  ADD PRIMARY KEY (`privilege_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `username_id` (`username_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `tiene`
--
ALTER TABLE `tiene`
  ADD KEY `privilege_id` (`privilege_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username_id`),
  ADD UNIQUE KEY `username` (`username`);





--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `musicals`
--
ALTER TABLE `musicals`
  MODIFY `musical_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `privilege`
--
ALTER TABLE `privilege`
  MODIFY `privilege_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `username_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;


--
-- Constraints for dumped tables
--

--
-- Constraints for table `musicals`
--
ALTER TABLE `musicals`
  ADD CONSTRAINT `musicals_ibfk_1` FOREIGN KEY (`username_id`) REFERENCES `users` (`username_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `otorga`
--
ALTER TABLE `otorga`
  ADD CONSTRAINT `otorga_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `otorga_ibfk_2` FOREIGN KEY (`username_id`) REFERENCES `users` (`username_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`username_id`) REFERENCES `users` (`username_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`privilege_id`) REFERENCES `privilege` (`privilege_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tiene_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Table structure for table `action`
--

CREATE TABLE `action` (
  `action_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;


--
-- Indexes for table `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`action_id`);

--
-- AUTO_INCREMENT for table `action`
--
ALTER TABLE `action`
  MODIFY `action_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

INSERT INTO action(name) VALUES
('New User registered'),
('New question registered'),
('Question deleted'),
('Quesion edited');

-- --------------------------------------------------------

--
-- Table structure for table record
--

CREATE TABLE `record` (
  `record_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  `username_id` int(11) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `created_at`  datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;


--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`record_id`),
  ADD KEY `action_id` (`action_id`),
  ADD KEY `username_id` (`username_id`);

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `record_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `record`
--

ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`action_id`) REFERENCES `action` (`action_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `record_ibfk_2` FOREIGN KEY (`username_id`) REFERENCES `users` (`username_id`) ON DELETE CASCADE ON UPDATE CASCADE;