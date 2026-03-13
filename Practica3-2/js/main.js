
// ======================
// LISTA DE TAREAS
// ======================

const btnAgregar = document.getElementById('btnAgregar');
const inputTarea = document.getElementById('nuevaTarea');
const lista = document.getElementById('listaTareas');

function agregarTarea(){

const texto = inputTarea.value.trim();

if(!texto) return;

const li = document.createElement('li');
const span = document.createElement('span');
const btnDel = document.createElement('button');

span.textContent = texto;
btnDel.textContent = "✕";

btnDel.onclick = () => li.remove();

span.onclick = () =>
li.classList.toggle('completada');

li.appendChild(span);
li.appendChild(btnDel);

lista.appendChild(li);

inputTarea.value="";

}

btnAgregar?.addEventListener('click',agregarTarea);

inputTarea?.addEventListener('keyup',e=>{
if(e.key==="Enter") agregarTarea();
});


// ======================
// CONTADOR DE TAREAS
// ======================

const titulo = document.getElementById('titulo');

function actualizarContador(){

const total = lista.querySelectorAll('li').length;

titulo.textContent = `Mi Lista de Tareas (${total})`;

}

new MutationObserver(actualizarContador)
.observe(lista,{childList:true});


// ======================
// TABS
// ======================

class TabComponent{

constructor(contenedor){

this.tabs=contenedor.querySelectorAll('[data-tab]');
this.paneles=contenedor.querySelectorAll('[data-panel]');

this.tabs.forEach(tab=>{

tab.onclick=()=>this.activar(tab.dataset.tab);

});

this.activar(this.tabs[0].dataset.tab);

}

activar(tab){

this.tabs.forEach(t=>
t.classList.toggle('activo',t.dataset.tab===tab)
);

this.paneles.forEach(p=>
p.classList.toggle('activo',p.dataset.panel===tab)
);

}

}

document
.querySelectorAll('.tabs-container')
.forEach(c=>new TabComponent(c));


// ======================
// ACORDEON
// ======================

document
.querySelectorAll('.acordeon-header')
.forEach(header=>{

header.onclick=()=>{

const item=header.parentElement;

document
.querySelectorAll('.acordeon-item')
.forEach(i=>i.classList.remove('abierto'));

item.classList.toggle('abierto');

}

});


// ======================
// MODAL
// ======================

class Modal{

constructor(id){

this.modal=document.getElementById(id);
this.overlay=this.modal.querySelector('.modal-overlay');

this.modal
.querySelector('.modal-cerrar')
.onclick=()=>this.ocultar();

this.overlay.onclick=()=>this.ocultar();

}

mostrar(titulo,contenido){

this.modal.querySelector('.modal-titulo').textContent=titulo;
this.modal.querySelector('.modal-cuerpo').innerHTML=contenido;

this.modal.classList.add('visible');

}

ocultar(){

this.modal.classList.remove('visible');

}

}

const miModal=new Modal('modal-principal');

document
.querySelectorAll('[data-modal]')
.forEach(btn=>{

btn.onclick=()=>{

miModal.mostrar(
btn.dataset.titulo,
btn.dataset.contenido
);

}

});


// ======================
// CARRUSEL
// ======================

class Carrusel{

constructor(selector,intervalo=3000){

this.slides=document.querySelectorAll(`${selector} .slide`);
this.actual=0;

setInterval(()=>this.siguiente(),intervalo);

}

mostrar(i){

this.slides.forEach((s,index)=>
s.classList.toggle('activo',index===i)
);

this.actual=i;

}

siguiente(){

this.mostrar(
(this.actual+1)%this.slides.length
);

}

}

new Carrusel('.mi-carrusel',4000);


// ======================
// API USUARIOS
// ======================

const contenedor=document.getElementById('contenedor-usuarios');
const spinner=document.getElementById('spinner');
const estado=document.getElementById('estado');

async function obtenerUsuarios(){

const res=await fetch('https://jsonplaceholder.typicode.com/users');

return res.json();

}

function renderizar(usuario){

const card=document.createElement('div');

card.className='tarjeta-usuario';

card.innerHTML=`

<h3>${usuario.name}</h3>

<p>${usuario.email}</p>

<p>${usuario.website}</p>

`;

return card;

}

document
.getElementById('btnCargar')
?.addEventListener('click',async()=>{

spinner.hidden=false;

const usuarios=await obtenerUsuarios();

contenedor.innerHTML="";

usuarios.forEach(u=>
contenedor.appendChild(renderizar(u))
);

spinner.hidden=true;

estado.textContent="Usuarios cargados";

});


// ======================
// BUSCADOR
// ======================

document
.getElementById('busqueda')
?.addEventListener('input',e=>{

const q=e.target.value.toLowerCase();

document
.querySelectorAll('.tarjeta-usuario')
.forEach(card=>{

const nombre=
card.querySelector('h3')
.textContent
.toLowerCase();

card.hidden=!nombre.includes(q);

});

});
