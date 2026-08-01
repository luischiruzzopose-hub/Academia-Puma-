/* =========================================================
   SELECTOR DE CATEGORÍA (G2 / G3)
   Resalta las tarjetas de categoría y de precio según el
   botón elegido, sin ocultar la otra opción del todo.
========================================================= */
const botonesPill = document.querySelectorAll(".pill");
const tarjetasCategoria = document.querySelector(".tarjetas-categoria");
const gridCursos = document.querySelector(".grid-cursos");

function marcarCategoria(categoria) {
  botonesPill.forEach(btn => {
    const activo = btn.dataset.cat === categoria;
    btn.classList.toggle("pill--activo", activo);
    btn.setAttribute("aria-selected", activo);
  });

  [tarjetasCategoria, gridCursos].forEach(contenedor => {
    if (!contenedor) return;
    contenedor.classList.add("filtrado");
    contenedor.querySelectorAll("[data-cat]").forEach(tarjeta => {
      tarjeta.classList.toggle("resaltada", tarjeta.dataset.cat === categoria);
    });
  });

  const tarjetaResaltada = document.querySelector(`.tarjeta-cat[data-cat="${categoria}"]`);
  if (tarjetaResaltada) {
    tarjetaResaltada.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

botonesPill.forEach(btn => {
  btn.addEventListener("click", () => marcarCategoria(btn.dataset.cat));
});

/* =========================================================
   ACORDEÓN DE PREGUNTAS FRECUENTES
========================================================= */
document.querySelectorAll(".acordeon__pregunta").forEach(boton => {
  boton.addEventListener("click", () => {
    const item = boton.closest(".acordeon__item");
    const icono = boton.querySelector(".acordeon__icono");
    const estaAbierto = item.classList.contains("acordeon__item--abierto");

    document.querySelectorAll(".acordeon__item--abierto").forEach(abierto => {
      if (abierto !== item) {
        abierto.classList.remove("acordeon__item--abierto");
        abierto.querySelector(".acordeon__icono").textContent = "+";
      }
    });

    item.classList.toggle("acordeon__item--abierto", !estaAbierto);
    icono.textContent = !estaAbierto ? "×" : "+";
  });
});

/* =========================================================
   BOTÓN "VOLVER ARRIBA"
========================================================= */
const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  btnSubir.classList.toggle("visible", window.scrollY > 400);
});

btnSubir.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================================
   MENÚ MÓVIL (muestra/oculta los links de navegación)
========================================================= */
const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");

btnMenu.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("navbar__links--abierto");
  btnMenu.setAttribute("aria-expanded", abierto);
});

/* =========================================================
   AÑO DEL FOOTER
========================================================= */
document.getElementById("anio").textContent = new Date().getFullYear();
