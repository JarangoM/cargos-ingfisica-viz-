// =============================================================================
// VISUALIZACIÓN INTERACTIVA — CARGOS MÁS COMUNES POR GRUPO (GRÁFICOS DE TORTA)
// =============================================================================
// Vanilla JS + SVG, sin dependencias externas (funciona abriendo el .html
// directamente en el navegador, sin servidor). Lee los datos de la constante
// global CARGOS_TORTA_DATA definida en cargos_torta_datos.js.
//
// Un gráfico de torta por grupo (Investigación y academia / Ingeniería /
// Datos, software e IA / Gestión y Negocios) donde cada porción es una
// FUNCIÓN (Ingenieros/as, Investigadores/as, Practicantes, etc.) agrupada
// por palabra clave, no un cargo individual. Al hacer clic en cualquier
// porción se abre un panel lateral con el detalle de los cargos originales
// que quedaron agrupados en ella.
// =============================================================================

(function () {
  "use strict";

  const DATA = CARGOS_TORTA_DATA;
  const NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  // ── Tooltip compartido ─────────────────────────────────────────────────────
  const tooltip = document.getElementById("tooltip");
  function mostrarTooltip(html, evt) {
    tooltip.innerHTML = html;
    tooltip.style.display = "block";
    moverTooltip(evt);
  }
  function moverTooltip(evt) {
    const pad = 14;
    let x = evt.clientX + pad;
    let y = evt.clientY + pad;
    const maxX = window.innerWidth - 260;
    const maxY = window.innerHeight - 90;
    if (x > maxX) x = evt.clientX - pad - 240;
    if (y > maxY) y = evt.clientY - pad - 60;
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
  }
  function ocultarTooltip() {
    tooltip.style.display = "none";
  }

  // =============================================================================
  // GRÁFICO DE TORTA (SVG)
  // =============================================================================

  function polarAPunto(cx, cy, r, anguloGrados) {
    const rad = ((anguloGrados - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcoSlicePath(cx, cy, r, anguloInicio, anguloFin) {
    const inicio = polarAPunto(cx, cy, r, anguloFin);
    const fin = polarAPunto(cx, cy, r, anguloInicio);
    const arcoGrande = anguloFin - anguloInicio > 180 ? 1 : 0;
    return [
      `M ${cx} ${cy}`,
      `L ${inicio.x} ${inicio.y}`,
      `A ${r} ${r} 0 ${arcoGrande} 0 ${fin.x} ${fin.y}`,
      "Z",
    ].join(" ");
  }

  const GRIS_ATENUADO = "var(--borde)";

  function renderPie(svg, cx, cy, r, items, total, grupoId, seleccion) {
    let anguloActual = 0;
    items.forEach((it) => {
      const anguloSlice = (it.frecuencia / total) * 360;
      const anguloInicio = anguloActual;
      const anguloFin = anguloActual + anguloSlice;
      anguloActual = anguloFin;
      const medio = anguloInicio + anguloSlice / 2;

      const esSeleccionado = !!seleccion && it.cargo === seleccion;
      const estaAtenuado = !!seleccion && !esSeleccionado;
      const colorRelleno = estaAtenuado ? GRIS_ATENUADO : it.color;

      // Al seleccionar una porción, se "explota" levemente hacia afuera para
      // que salte a la vista.
      const desplazamiento = esSeleccionado ? polarAPunto(0, 0, 9, medio) : { x: 0, y: 0 };
      const transformAttr = esSeleccionado ? `translate(${desplazamiento.x} ${desplazamiento.y})` : "";

      const esCirculoCompleto = anguloSlice >= 359.99;
      const path = svgEl(esCirculoCompleto ? "circle" : "path", esCirculoCompleto
        ? { cx, cy, r, fill: colorRelleno, stroke: "var(--panel)", "stroke-width": "1.5", class: "slice" }
        : {
            d: arcoSlicePath(cx, cy, r, anguloInicio, anguloFin),
            fill: colorRelleno,
            stroke: "var(--panel)",
            "stroke-width": esSeleccionado ? "2.5" : "1.5",
            class: "slice" + (esSeleccionado ? " resaltado" : ""),
          });
      if (estaAtenuado) path.setAttribute("opacity", "0.55");
      if (transformAttr) path.setAttribute("transform", transformAttr);
      svg.appendChild(path);

      path.addEventListener("mousemove", (e) => {
        mostrarTooltip(
          `<div class="tt-cargo">${it.cargo}</div>` +
            `<div>${it.frecuencia} ${it.frecuencia === 1 ? "mención" : "menciones"} · ${it.porcentaje}%</div>` +
            `<div class="tt-cat">${it.nCargos} cargo${it.nCargos === 1 ? "" : "s"} distinto${it.nCargos === 1 ? "" : "s"} · clic para ver el detalle</div>`,
          e
        );
      });
      path.addEventListener("mouseleave", ocultarTooltip);
      path.addEventListener("click", () => alClicPorcion(grupoId, it));

      const posEtiquetaBase = esSeleccionado ? r * 0.65 : r * 0.65;
      if (anguloSlice >= 18 || esSeleccionado) {
        const posEtiqueta = polarAPunto(cx, cy, posEtiquetaBase, medio);
        const texto = svgEl("text", {
          x: posEtiqueta.x + (esSeleccionado ? desplazamiento.x : 0),
          y: posEtiqueta.y + (esSeleccionado ? desplazamiento.y : 0),
          class: "etiqueta-slice" + (esSeleccionado ? " resaltada" : ""),
          "text-anchor": "middle",
          dy: "0.35em",
        });
        texto.textContent = it.porcentaje + "%";
        svg.appendChild(texto);
      }
    });
  }

  // =============================================================================
  // TARJETA POR GRUPO — torta + leyenda local
  // =============================================================================

  function crearTarjetaGrupo(grupo, seleccion) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-grupo";
    tarjeta.style.setProperty("--color-grupo", grupo.color);

    const encabezado = document.createElement("div");
    encabezado.className = "encabezado-tarjeta";
    encabezado.innerHTML =
      `<div class="titulo-grupo">${grupo.nombre}</div>` +
      `<div class="subtitulo-grupo">${grupo.total} menciones · ${grupo.cargosUnicos} cargos únicos</div>`;
    tarjeta.appendChild(encabezado);

    const cuerpo = document.createElement("div");
    cuerpo.className = "cuerpo-tarjeta";

    const size = 220;
    const r = 92;
    const cx = size / 2;
    const cy = size / 2;
    const svg = svgEl("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, class: "pie-svg" });
    renderPie(svg, cx, cy, r, grupo.items, grupo.total, grupo.id, seleccion);
    cuerpo.appendChild(svg);

    const leyenda = document.createElement("div");
    leyenda.className = "leyenda-grupo" + (seleccion ? " filtro-activo" : "");
    grupo.items.forEach((it) => {
      const esSeleccionado = seleccion === it.cargo;
      const fila = document.createElement("div");
      fila.className = "fila-leyenda" +
        (it.cargo === "Otros cargos" ? " es-otros" : "") +
        (esSeleccionado ? " seleccionado" : "");
      fila.innerHTML =
        `<span class="punto-leyenda" style="background:${it.color}"></span>` +
        `<span class="nombre-leyenda">${it.cargo}</span>` +
        `<span class="valor-leyenda">${it.frecuencia}</span>`;
      fila.addEventListener("click", () => alClicPorcion(grupo.id, it));
      leyenda.appendChild(fila);
    });
    cuerpo.appendChild(leyenda);

    tarjeta.appendChild(cuerpo);
    return tarjeta;
  }

  // ── Selección/resaltado por grupo (independiente en cada tarjeta) ──────────
  const seleccionPorGrupo = {};

  function alClicPorcion(grupoId, item) {
    const yaSeleccionado = seleccionPorGrupo[grupoId] === item.cargo;
    seleccionPorGrupo[grupoId] = yaSeleccionado ? null : item.cargo;
    renderTodo();
    if (!yaSeleccionado) mostrarDetalle(item);
  }

  function renderTodo() {
    const cont = document.getElementById("contenedor-principal");
    cont.innerHTML = "";
    const fila = document.createElement("div");
    fila.className = "fila-grupos";
    DATA.grupos.forEach((grupo) => fila.appendChild(crearTarjetaGrupo(grupo, seleccionPorGrupo[grupo.id] || null)));
    cont.appendChild(fila);
  }

  // =============================================================================
  // PANEL DE DETALLE
  // =============================================================================

  function mostrarDetalle(item) {
    const panel = document.getElementById("panel-detalle");
    const titulo = document.getElementById("detalle-titulo");
    const cuerpo = document.getElementById("detalle-cuerpo");

    titulo.textContent = `${item.cargo} — ${item.frecuencia} ${item.frecuencia === 1 ? "mención" : "menciones"} (${item.porcentaje}%)`;
    cuerpo.innerHTML = "";

    item.detalle.forEach((c) => {
      const f = document.createElement("div");
      f.className = "fila-detalle";
      f.innerHTML = `<span class="conteo-detalle">${c.conteo}</span><span>${c.cargo}</span>`;
      cuerpo.appendChild(f);
    });

    panel.classList.add("abierto");
  }

  document.getElementById("cerrar-detalle").addEventListener("click", () => {
    document.getElementById("panel-detalle").classList.remove("abierto");
  });

  renderTodo();
})();
