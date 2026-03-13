# Proyecto: Explorador DOM y Componentes Interactivos

Este proyecto es una práctica de desarrollo web enfocada en el uso del **DOM, eventos, módulos de JavaScript y componentes interactivos**.
Incluye varias funcionalidades modernas implementadas con **HTML, CSS y JavaScript puro**.

## Funcionalidades principales

El proyecto contiene diferentes componentes interactivos:

* Lista de tareas dinámica manipulando el DOM
* Dashboard de usuarios obtenido desde una API
* Búsqueda de usuarios en tiempo real
* Sistema de pestañas (tabs)
* Acordeón interactivo
* Modal dinámico
* Carrusel automático
* Animaciones con CSS
* Observación de cambios en el DOM con `MutationObserver`

## Estructura del proyecto

```
proyecto/
│
├── index.html
├── dashboard.html
│
├── css/
│   └── estilos.css
│
├── js/
│   ├── app.js
│   ├── dashboard.js
│   ├── api.js
│   ├── tabs.js
│   ├── acordeon.js
│   ├── modal.js
│   └── carrusel.js
│
└── README.md
```

## Requisitos para ejecutar el proyecto

Para ejecutar correctamente el proyecto se recomienda utilizar un servidor local.

### Instalar Live Server en Visual Studio Code

1. Abrir **Visual Studio Code**
2. Ir a **Extensiones**
3. Buscar **Live Server**
4. Instalar la extensión de **Ritwick Dey**

## Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto en **Visual Studio Code**
2. Buscar el archivo:

```
index.html
```

3. Dar clic derecho sobre el archivo
4. Seleccionar la opción:

```
Open with Live Server
```

El navegador abrirá automáticamente el proyecto en una dirección similar a:

```
http://127.0.0.1:5500
```

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* Manipulación del DOM
* LocalStorage
* MutationObserver

## Notas

* El **Dashboard de usuarios** consume datos de una API pública.
* Algunas funcionalidades utilizan **JavaScript modular**, por lo que es necesario ejecutar el proyecto con un servidor local (como Live Server) para evitar errores de CORS.

## Autor

Proyecto desarrollado como práctica académica para el aprendizaje de:

* Manipulación del DOM
* Componentes interactivos
* Manejo de eventos
* Consumo de APIs
