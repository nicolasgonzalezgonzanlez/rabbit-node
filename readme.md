# Rabbitmq - nodejs - express
## Proyecto base

## Docker

Primero, extraemos la imagen de la ventana acoplable RabbitMQ. Usaremos la 3-managementversión, por lo que obtenemos el complemento de administración preinstalado.

```sh
docker pull rabbitmq:3-management
```
Ahora levantamos la imagen de docker con el puerto 15672, este puerto es para el gestor visual

[docker_image](https://hub.docker.com/_/rabbitmq?tab=reviews)
```sh
docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

## Instalacion

[Node.js](https://nodejs.org/) v14+ para correr.

Commandos
```sh
npm i
npm run dev
```
