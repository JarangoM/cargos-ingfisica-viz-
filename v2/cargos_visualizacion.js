// =============================================================================
// VISUALIZACIÓN INTERACTIVA — AGRUPACIÓN DE CARGOS (4 GRUPOS)
// =============================================================================
// Vanilla JS + SVG, sin dependencias externas (funciona abriendo el .html
// directamente en el navegador, sin servidor). Lee los datos de la constante
// global CARGOS_DATA definida en cargos_datos.js.
//
// Gráfico de barras con los 4 grupos (ordenados por conteo) y un panel de
// detalle que lista los cargos individuales de un grupo al hacer clic.
// =============================================================================

(function () {
  "use strict";

  const DATA = CARGOS_DATA;
  const NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  function porcentaje(conteo) {
    return ((conteo / DATA.total_menciones) * 100).toFixed(1) + "%";
  }

  const cargosPorGrupo = {};
  DATA.cargos.forEach((c) => {
    (cargosPorGrupo[c.grupo] = cargosPorGrupo[c.grupo] || []).push(c);
  });
  Object.values(cargosPorGrupo).forEach((lista) => lista.sort((a, b) => b.conteo - a.conteo));

  // ── Tooltip compartido ─────────────────────────────────────────────────────
  const tooltip = document.getElementById("tooltip");
  function mostrarTooltip(html, evt) {
    tooltip.innerHTML = html;
    tooltip.style.display = "block";
    moverTooltip(evt);
  }
  function moverTooltip(evt) {
    const pad = 14;
    tooltip.style.left = evt.clientX + pad + "px";
    tooltip.style.top = evt.clientY + pad + "px";
  }
  function ocultarTooltip() {
    tooltip.style.display = "none";
  }

  // =============================================================================
  // GRÁFICO DE BARRAS
  // =============================================================================

  function renderBarras() {
    const cont = document.getElementById("vista-barras");
    cont.innerHTML = "";

    const nodos = DATA.grupos;
    const maxConteo = Math.max(...nodos.map((n) => n.conteo));

    const ancho = cont.clientWidth || 900;
    const altoFila = 64;
    const alto = nodos.length * altoFila + 20;
    const anchoEtiqueta = 220;
    const anchoBarraMax = ancho - anchoEtiqueta - 90;

    const svg = svgEl("svg", { width: "100%", height: alto, viewBox: `0 0 ${ancho} ${alto}` });

    nodos.forEach((n, i) => {
      const y = 10 + i * altoFila;
      const w = Math.max((n.conteo / maxConteo) * anchoBarraMax, 3);

      const label = svgEl("text", { x: anchoEtiqueta - 14, y: y + altoFila / 2 - 6, class: "etiqueta-barra", "text-anchor": "end", dy: "0.35em" });
      label.textContent = n.nombre;
      svg.appendChild(label);

      const grupo = svgEl("g", { class: "fila-barra", style: "cursor:pointer" });
      const rect = svgEl("rect", {
        x: anchoEtiqueta, y: y + 10, width: w, height: altoFila - 26, rx: 6, fill: n.color, class: "barra",
      });
      const valor = svgEl("text", { x: anchoEtiqueta + w + 10, y: y + altoFila / 2 - 6, class: "valor-barra", dy: "0.35em" });
      valor.textContent = `${n.conteo} (${porcentaje(n.conteo)})`;
      const sub = svgEl("text", { x: anchoEtiqueta - 14, y: y + altoFila / 2 + 14, class: "sub-etiqueta", "text-anchor": "end" });
      const nCargos = (cargosPorGrupo[n.id] || []).length;
      sub.textContent = `${nCargos} cargo${nCargos === 1 ? "" : "s"} distinto${nCargos === 1 ? "" : "s"}`;

      grupo.appendChild(rect);
      grupo.appendChild(valor);
      grupo.addEventListener("mousemove", (e) => mostrarTooltip(`<strong>${n.nombre}</strong><br>${n.conteo} menciones (${porcentaje(n.conteo)})<br><em>clic para ver los cargos</em>`, e));
      grupo.addEventListener("mouseleave", ocultarTooltip);
      grupo.addEventListener("click", () => mostrarDetalle(n.id));
      svg.appendChild(grupo);
      svg.appendChild(sub);
    });

    cont.appendChild(svg);
  }

  // =============================================================================
  // PANEL DE DETALLE — lista de cargos individuales de un grupo
  // =============================================================================

  function mostrarDetalle(id) {
    const info = DATA.grupos.find((n) => n.id === id);
    const lista = cargosPorGrupo[id] || [];

    const panel = document.getElementById("panel-detalle");
    const titulo = document.getElementById("detalle-titulo");
    const cuerpo = document.getElementById("detalle-cuerpo");

    titulo.textContent = `${info.nombre} — ${info.conteo} menciones (${porcentaje(info.conteo)})`;
    cuerpo.innerHTML = "";
    lista.forEach((c) => {
      const fila = document.createElement("div");
      fila.className = "fila-detalle";
      fila.innerHTML = `<span class="conteo-detalle">${c.conteo}</span><span>${c.cargo}</span>`;
      cuerpo.appendChild(fila);
    });

    panel.classList.add("abierto");
  }

  document.getElementById("cerrar-detalle").addEventListener("click", () => {
    document.getElementById("panel-detalle").classList.remove("abierto");
  });

  window.addEventListener("resize", renderBarras);

  // ── Encabezado con totales ──────────────────────────────────────────────────
  document.getElementById("total-menciones").textContent = DATA.total_menciones;
  document.getElementById("total-distintos").textContent = DATA.cargos.length;

  renderBarras();
})();
