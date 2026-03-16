// LISTA DE TAREAS

const btnAgregar = document.getElementById('btnAgregar');
const inputTarea = document.getElementById('nuevaTarea');
const lista = document.getElementById('listaTareas');

function agregarTarea(){

const texto=inputTarea.value.trim();
if(!texto) return;

const li=document.createElement('li');
const span=document.createElement('span');
const btnDel=document.createElement('button');

span.textContent=texto;

btnDel.textContent="✕";
btnDel.className="btn-eliminar";

btnDel.onclick=()=>li.remove();

span.onclick=()=>li.classList.toggle("completada");

li.appendChild(span);
li.appendChild(btnDel);

lista.appendChild(li);

inputTarea.value="";
}

btnAgregar.onclick=agregarTarea;

inputTarea.addEventListener("keyup",e=>{
if(e.key==="Enter") agregarTarea();
});

const titulo=document.getElementById("titulo");

const colores=['#1F3864','#2E5FA3','#E8A020','#27AE60'];

let colorIdx=0;

titulo.ondblclick=()=>{

colorIdx=(colorIdx+1)%colores.length;

titulo.style.color=colores[colorIdx];

};

function actualizarContador(){

const total=lista.querySelectorAll("li").length;

titulo.textContent=`Mi Lista de Tareas (${total})`;

}

const observer=new MutationObserver(actualizarContador);

observer.observe(lista,{childList:true});


// API

const BASE_URL="https://jsonplaceholder.typicode.com";

async function obtenerUsuarios(){

const res=await fetch(`${BASE_URL}/users`);

return res.json();

}

async function obtenerPostsDeUsuario(id){

const res=await fetch(`${BASE_URL}/posts?userId=${id}`);

return res.json();

}


// DASHBOARD

const contenedor=document.getElementById("contenedor-usuarios");
const spinner=document.getElementById("spinner");

btnCargar.onclick=async()=>{

spinner.hidden=false;

contenedor.innerHTML="";

const usuarios=await obtenerUsuarios();

usuarios.forEach(u=>{

const card=document.createElement("article");

card.className="tarjeta-usuario";

card.innerHTML=`
<h3>${u.name}</h3>
<p>${u.email}</p>
<button class="btn-posts">Ver publicaciones</button>
<div class="posts-container" hidden></div>
`;

card.querySelector(".btn-posts").onclick=async()=>{

const posts=await obtenerPostsDeUsuario(u.id);

const div=card.querySelector(".posts-container");

div.hidden=false;

div.innerHTML=posts.slice(0,3)
.map(p=>`<p>${p.title}</p>`)
.join("");

};

contenedor.appendChild(card);

});

spinner.hidden=true;

};


// BUSQUEDA

busqueda.oninput=(e)=>{

const query=e.target.value.toLowerCase();

document.querySelectorAll(".tarjeta-usuario").forEach(card=>{

const nombre=card.querySelector("h3").textContent.toLowerCase();

card.hidden=!nombre.includes(query);

});

};


// TABS

document.querySelectorAll(".tabs button").forEach(tab=>{

tab.onclick=()=>{

document.querySelectorAll(".tabs button").forEach(t=>t.classList.remove("activo"));

tab.classList.add("activo");

const id=tab.dataset.tab;

document.querySelectorAll(".panel").forEach(p=>{

p.classList.toggle("activo",p.dataset.panel===id);

});

};

});


// ACORDEON

document.querySelectorAll(".acordeon-header").forEach(header=>{

header.onclick=()=>{

const item=header.parentElement;

item.classList.toggle("abierto");

};

});


// MODAL

const modal=document.getElementById("modal-principal");

document.querySelectorAll("[data-modal]").forEach(btn=>{

btn.onclick=()=>{

modal.querySelector(".modal-titulo").textContent=btn.dataset.titulo;

modal.querySelector(".modal-cuerpo").innerHTML=btn.dataset.contenido;

modal.classList.add("visible");

};

});

document.querySelector(".modal-cerrar").onclick=()=>modal.classList.remove("visible");

document.querySelector(".modal-overlay").onclick=()=>modal.classList.remove("visible");


// CARRUSEL

const slides=document.querySelectorAll(".slide");

let actual=0;

setInterval(()=>{

slides[actual].classList.remove("activo");

actual=(actual+1)%slides.length;

slides[actual].classList.add("activo");

},4000);
