# Rick y Morty

Página web donde encontrar todos los personajes de la serie de dibujos animados Rick y Morty.
 
## Descripción

En esta página web podrás encontrar un listado de todos los personajes de la serie y ver detalles personalizados de cada uno de ellos y guardar tus personajes favoritos. 

## Instalación

#### Entorno de producción

Esta página ha sido desplegada en [heroku](https://secure-waters-20164.herokuapp.com/) donde puedes comprobar su funcionamiento sin ningún tipo de instalación previa.

#### Entorno local

Instalaciones previas:
1. Base de datos MySQL: Instalar un servidor Apache con base datos tipo [XAMPP](https://www.apachefriends.org/download.html) o [MAMP](https://www.mamp.info/en/downloads/).
2. [NodeJS](https://nodejs.org/en/).
3. [Angular CLI](https://angular.io/cli).

Iniciar el servidor Apache y importar la base de datos que se encuentra en la carpeta *public/rickandmorty.sql*. En el archivo *config/db.js* se pueden cambiar los datos de conexión a la base de datos, en caso que sea necesario.

En la carpeta raíz, se encuentra el backEnd cuya instalación de todas las dependencias se debe realizar a través de Npm:

```shell
    # Clonar o instalar comandos
    npm install
```

Al acabar la instalación, iniciamos el servidor en <http://localhost:3000> con el siguiente comando:

```shell
    # test o ejecutar commandos
    node app
```

A continuación es necesario instalar todos los módulos de Angular para el FrontEnd en otra ventana de la consola, con lo que hemos de acceder primero a la carpeta y realizar la instalación:

```shell
    # acceder a la carpeta del FrontEnd
    cd rickandmorty
    # Clonar o instalar comandos
    npm install
```

Iniciamos el FrontEnd en <http://localhost:4200>:

```shell
    # test o ejecutar commandos
    ng serve
```

## Uso

Es necesario el registro previo para acceder al contenido de la página web a través de un formulario al cual se puede acceder desde la página de inicio. Es obligatorio proveer de un correo electrónico y una contraseña.

Una vez registrado, ya se puede tener acceso.

Para guardar/quitar algún personaje de favoritos tan solo hay que clickar en el icono del corazón de la ficha del personaje seleccionado.

## Contribuciones

Si estas planeando implementar una nueva funcionalidad, te recomiendo que primero lo comentes conmigo. Crea un nuevo *Issue* con tu nombre y contenido para hablarlo.

## Autores

[@JaimeApBa](https://github.com/JaimeApBa)

## Licencia

El código de este repositorio está bajo licencia open-source. Eres libre de reproducirlo pero no reproduzcas el mismo repositorio con el mismo contenido en cualquier otro lugar.
