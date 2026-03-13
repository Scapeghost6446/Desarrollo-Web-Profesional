# Proyecto Web – Componentes Interactivos con JavaScript

Este proyecto es una práctica de desarrollo web enfocada en el uso del **DOM, módulos de JavaScript, consumo de APIs, y componentes interactivos reutilizables**.

La aplicación incluye varios elementos dinámicos implementados con **JavaScript moderno (ES6+)**, así como interacción con una **API pública** para simular un dashboard de usuarios.

---

# Características del proyecto

El proyecto integra los siguientes componentes:

### Lista de tareas dinámica

* Creación de tareas desde un campo de texto.
* Eliminación de tareas.
* Marcado de tareas como completadas.
* Contador automático de tareas usando `MutationObserver`.
* Cambio de color del título con doble clic.

### Dashboard de usuarios (API)

* Obtención de usuarios desde una API pública.
* Renderizado dinámico de tarjetas de usuario.
* Consulta de publicaciones de cada usuario.
* Indicador de carga.
* Manejo de errores.
* Búsqueda dinámica de usuarios.

### Componentes UI reutilizables

* Sistema de **pestañas (Tabs)** con persistencia usando `localStorage`.
* **Acordeón** para mostrar y ocultar contenido.
* **Modal dinámico** que carga contenido desde atributos `data-*`.
* **Carrusel automático** con transición entre slides.

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* DOM API
* MutationObserver
* LocalStorage

---

# Estructura del proyecto

```
Practica3-3/
│
├── index.html
├── dashboard.html
├── estilos.css
│
├── js/
│   ├── app.js
│   ├── api.js
│   ├── dashboard.js
│   ├── tabs.js
│   ├── acordeon.js
│   ├── modal.js
│   └── carrusel.js
│
└── README.md
```

---

# Instalación y ejecución

1. Descargar o clonar el repositorio:

```
git clone <url-del-repositorio>
```

2. Abrir la carpeta del proyecto en **VS Code** o en tu editor preferido.

3. Ejecutar el proyecto usando un **servidor local**.

---

# IMPORTANTE – Ejecución con servidor local

Este proyecto utiliza **módulos de JavaScript (`import / export`)** y consumo de **APIs externas**, por lo que **NO funcionará correctamente si se abre directamente con doble clic en el archivo HTML**.

Si se abre de esa forma, el navegador mostrará errores como:

```
Access to script at 'file://...' from origin 'null' has been blocked by CORS policy
```

Esto ocurre porque los navegadores bloquean la carga de módulos cuando el proyecto se ejecuta desde el protocolo:

```
file://
```

---

# Forma recomendada de ejecutar el proyecto

### Opción 1 – Live Server (recomendado)

1. Instalar la extensión **Live Server** en VS Code.
2. Abrir el archivo `index.html`.
3. Clic derecho → **Open with Live Server**.

El proyecto se abrirá en:

```
http://127.0.0.1:5500
```

---

### Opción 2 – Servidor local con Python

Desde la carpeta del proyecto ejecutar:

```
python -m http.server
```

Luego abrir en el navegador:

```
http://localhost:8000
```

---

# API utilizada

El dashboard obtiene datos desde una API pública para pruebas de desarrollo.

Ejemplo de endpoint:

```
https://dummyjson.com/users
```

Esta API proporciona datos de usuarios como:

* nombre
* correo electrónico
* empresa
* dirección
* publicaciones

---

# Objetivo académico

El objetivo de esta práctica es aplicar conceptos como:

* Manipulación del DOM
* Programación orientada a eventos
* Consumo de APIs
* Arquitectura modular en JavaScript
* Desarrollo de componentes reutilizables

---

# Autor

Práctica desarrollada como parte de una actividad académica de programación web.
