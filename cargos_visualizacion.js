// =============================================================================
// VISUALIZACIÓN INTERACTIVA — AGRUPACIÓN DE CARGOS (4 / 6 / 8 GRUPOS)
// =============================================================================
// Vanilla JS + SVG, sin dependencias externas (funciona abriendo el .html
// directamente en el navegador, sin servidor). Lee los datos de la constante
// global CARGOS_DATA definida en cargos_datos.js.
//
// Dos vistas:
//   1. "Flujo 4 → 6 → 8": diagrama tipo alluvial/Sankey que muestra cómo se
//      subdividen los 4 grupos en 6 y luego en 8 al aumentar el detalle.
//   2. "Comparar barras": gráfico de barras para un nivel de granularidad
//      (4 / 6 / 8) a elección, con panel de detalle de cargos al hacer clic.
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

  // Mapa color por id de grupo en cualquier nivel (4/6/8), heredado del L4.
  const colorPorL4 = {};
  DATA.niveles["4"].forEach((n) => (colorPorL4[n.id] = n.color));

  function colorDe(nodo, nivel) {
    if (nivel === "4") return nodo.color;
    if (nivel === "6") return colorPorL4[nodo.padre];
    return colorPorL4[nodo.padre_l4];
  }

  function sombrear(hex, factor) {
    // factor < 1 oscurece, > 1 aclara
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) & 0xff, g = (n >> 8) & 0xff, b = n & 0xff;
    r = Math.min(255, Math.round(r * factor));
    g = Math.min(255, Math.round(g * factor));
    b = Math.min(255, Math.round(b * factor));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  const cargosPorGrupo = { "4": {}, "6": {}, "8": {} };
  DATA.cargos.forEach((c) => {
    (cargosPorGrupo["4"][c.l4] = cargosPorGrupo["4"][c.l4] || []).push(c);
    (cargosPorGrupo["6"][c.l6] = cargosPorGrupo["6"][c.l6] || []).push(c);
    (cargosPorGrupo["8"][c.g8] = cargosPorGrupo["8"][c.g8] || []).push(c);
  });
  ["4", "6", "8"].forEach((nv) => {
    Object.values(cargosPorGrupo[nv]).forEach((lista) => lista.sort((a, b) => b.conteo - a.conteo));
  });

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
  // VISTA 1 — FLUJO 4 → 6 → 8 (alluvial / sankey simplificado)
  // =============================================================================

  function construirFlujo(nivelA, nivelB, campoPadre) {
    // Devuelve, para cada nodo de nivelA (ordenado), la lista de nodos de
    // nivelB que le pertenecen (ordenados por conteo desc).
    const hijosDe = {};
    DATA.niveles[nivelB].forEach((n) => {
      const padre = n[campoPadre];
      (hijosDe[padre] = hijosDe[padre] || []).push(n);
    });
    Object.values(hijosDe).forEach((l) => l.sort((a, b) => b.conteo - a.conteo));
    return hijosDe;
  }

  function renderFlujo() {
    const cont = document.getElementById("vista-flujo");
    cont.innerHTML = "";

    const ancho = Math.max(cont.clientWidth || 900, 1100);
    const alto = 600;
    const margenY = 56;
    const altoUtil = alto - margenY - 24;

    const margenLateral = 210;
    const colX = [margenLateral, ancho / 2, ancho - margenLateral];
    const anchoNodo = 16;

    const svg = svgEl("svg", { width: ancho, height: alto, viewBox: `0 0 ${ancho} ${alto}` });

    const hijos4a6 = construirFlujo("4", "6", "padre");
    const hijos6a8 = construirFlujo("6", "8", "padre_l6");

    function layout(nodos) {
      let y = margenY;
      const escala = altoUtil / DATA.total_menciones;
      const posiciones = {};
      nodos.forEach((n) => {
        const h = Math.max(n.conteo * escala, 2);
        posiciones[n.id] = { y0: y, y1: y + h, h, escala };
        y += h + 6;
      });
      return posiciones;
    }

    const pos4 = layout(DATA.niveles["4"]);
    const pos6 = layout(DATA.niveles["6"]);
    const pos8 = layout(DATA.niveles["8"]);

    const capaCintas = svgEl("g", { class: "capa-cintas" });
    const capaNodos = svgEl("g", { class: "capa-nodos" });
    svg.appendChild(capaCintas);
    svg.appendChild(capaNodos);

    function cinta(x0, y0a, y0b, x1, y1a, y1b, color, meta) {
      const xm = (x0 + x1) / 2;
      const d = `M${x0},${y0a} C${xm},${y0a} ${xm},${y1a} ${x1},${y1a} ` +
                `L${x1},${y1b} C${xm},${y1b} ${xm},${y0b} ${x0},${y0b} Z`;
      const path = svgEl("path", { d, fill: color, opacity: 0.45, class: "cinta" });
      path.dataset.grupos = JSON.stringify(meta.grupos);
      path.addEventListener("mousemove", (e) => {
        mostrarTooltip(meta.tooltip, e);
        resaltar(meta.grupos);
      });
      path.addEventListener("mouseleave", () => {
        ocultarTooltip();
        resaltar(null);
      });
      capaCintas.appendChild(path);
    }

    function nodo(x, id, info, nivel, alClic) {
      const color = colorDe(info, nivel);
      const rect = svgEl("rect", {
        x: x, y: info._y0, width: anchoNodo, height: Math.max(info._y1 - info._y0, 2),
        fill: color, class: "nodo", "data-id": id,
      });
      rect.addEventListener("mousemove", (e) => {
        mostrarTooltip(
          `<strong>${info.nombre}</strong><br>${info.conteo} menciones (${porcentaje(info.conteo)})`, e
        );
        resaltar([id]);
      });
      rect.addEventListener("mouseleave", () => { ocultarTooltip(); resaltar(null); });
      rect.addEventListener("click", () => alClic(id, info));
      capaNodos.appendChild(rect);

      let tx, ty, anchor;
      if (x === colX[0]) {
        tx = x - 10; ty = (info._y0 + info._y1) / 2; anchor = "end";
      } else if (x === colX[2]) {
        tx = x + anchoNodo + 10; ty = (info._y0 + info._y1) / 2; anchor = "start";
      } else {
        tx = x + anchoNodo / 2; ty = info._y0 - 8; anchor = "middle";
      }
      const label = svgEl("text", {
        x: tx, y: ty, class: "etiqueta-nodo", "text-anchor": anchor, dy: anchor === "middle" ? "0" : "0.35em",
      });
      label.textContent = `${info.nombre} (${info.conteo})`;
      capaNodos.appendChild(label);
    }

    function resaltar(idsActivos) {
      capaCintas.querySelectorAll(".cinta").forEach((c) => {
        if (!idsActivos) { c.style.opacity = 0.45; return; }
        const grupos = JSON.parse(c.dataset.grupos);
        const activo = idsActivos.some((id) => grupos.includes(id));
        c.style.opacity = activo ? 0.85 : 0.12;
      });
    }

    // posiciones absolutas para cada nodo
    DATA.niveles["4"].forEach((n) => { n._y0 = pos4[n.id].y0; n._y1 = pos4[n.id].y1; });
    DATA.niveles["6"].forEach((n) => { n._y0 = pos6[n.id].y0; n._y1 = pos6[n.id].y1; });
    DATA.niveles["8"].forEach((n) => { n._y0 = pos8[n.id].y0; n._y1 = pos8[n.id].y1; });

    // cintas 4 -> 6
    DATA.niveles["4"].forEach((n4) => {
      let acumA = n4._y0;
      (hijos4a6[n4.id] || []).forEach((n6) => {
        const h = pos4[n4.id].escala * n6.conteo;
        const y0a = acumA, y0b = acumA + h;
        acumA += h;
        cinta(colX[0] + anchoNodo, y0a, y0b, colX[1], n6._y0, n6._y1, n4.color, {
          grupos: [n4.id, n6.id],
          tooltip: `<strong>${n4.nombre} → ${n6.nombre}</strong><br>${n6.conteo} menciones`,
        });
      });
    });

    // cintas 6 -> 8
    DATA.niveles["6"].forEach((n6) => {
      let acumA = n6._y0;
      (hijos6a8[n6.id] || []).forEach((n8) => {
        const h = pos6[n6.id].escala * n8.conteo;
        const y0a = acumA, y0b = acumA + h;
        acumA += h;
        cinta(colX[1] + anchoNodo, y0a, y0b, colX[2], n8._y0, n8._y1, colorPorL4[n6.padre], {
          grupos: [n6.id, n8.id],
          tooltip: `<strong>${n6.nombre} → ${n8.nombre}</strong><br>${n8.conteo} menciones`,
        });
      });
    });

    DATA.niveles["4"].forEach((n) => nodo(colX[0], n.id, n, "4", (id) => mostrarDetalle("4", id)));
    DATA.niveles["6"].forEach((n) => nodo(colX[1], n.id, n, "6", (id) => mostrarDetalle("6", id)));
    DATA.niveles["8"].forEach((n) => nodo(colX[2], n.id, n, "8", (id) => mostrarDetalle("8", id)));

    // encabezados de columna
    ["4 grupos", "6 grupos", "8 grupos"].forEach((txt, i) => {
      const t = svgEl("text", { x: colX[i] + anchoNodo / 2, y: 18, class: "titulo-columna", "text-anchor": "middle" });
      t.textContent = txt;
      svg.appendChild(t);
    });

    cont.appendChild(svg);
  }

  // =============================================================================
  // VISTA 2 — BARRAS COMPARATIVAS (granularidad seleccionable)
  // =============================================================================

  let granularidadActual = "8";

  function renderBarras() {
    const cont = document.getElementById("vista-barras");
    cont.innerHTML = "";

    const nodos = DATA.niveles[granularidadActual];
    const maxConteo = Math.max(...nodos.map((n) => n.conteo));

    const ancho = cont.clientWidth || 900;
    const altoFila = 42;
    const alto = nodos.length * altoFila + 20;
    const anchoEtiqueta = 260;
    const anchoBarraMax = ancho - anchoEtiqueta - 90;

    const svg = svgEl("svg", { width: "100%", height: alto, viewBox: `0 0 ${ancho} ${alto}` });

    nodos.forEach((n, i) => {
      const y = 10 + i * altoFila;
      const color = colorDe(n, granularidadActual);
      const w = Math.max((n.conteo / maxConteo) * anchoBarraMax, 3);

      const label = svgEl("text", { x: anchoEtiqueta - 10, y: y + altoFila / 2, class: "etiqueta-barra", "text-anchor": "end", dy: "0.35em" });
      label.textContent = n.nombre;
      svg.appendChild(label);

      const grupo = svgEl("g", { class: "fila-barra", style: "cursor:pointer" });
      const rect = svgEl("rect", {
        x: anchoEtiqueta, y: y + 6, width: w, height: altoFila - 14, rx: 5, fill: color, class: "barra",
      });
      const valor = svgEl("text", { x: anchoEtiqueta + w + 10, y: y + altoFila / 2, class: "valor-barra", dy: "0.35em" });
      valor.textContent = `${n.conteo} (${porcentaje(n.conteo)})`;

      grupo.appendChild(rect);
      grupo.appendChild(valor);
      grupo.addEventListener("mousemove", (e) => mostrarTooltip(`<strong>${n.nombre}</strong><br>${n.conteo} menciones (${porcentaje(n.conteo)})<br><em>clic para ver los cargos</em>`, e));
      grupo.addEventListener("mouseleave", ocultarTooltip);
      grupo.addEventListener("click", () => mostrarDetalle(granularidadActual, n.id));
      svg.appendChild(grupo);
    });

    cont.appendChild(svg);
  }

  // =============================================================================
  // PANEL DE DETALLE — lista de cargos individuales de un grupo
  // =============================================================================

  function mostrarDetalle(nivel, id) {
    const nodos = DATA.niveles[nivel];
    const info = nodos.find((n) => n.id === id);
    const lista = cargosPorGrupo[nivel][id] || [];

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

  // =============================================================================
  // CONTROLES DE PESTAÑAS Y GRANULARIDAD
  // =============================================================================

  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      const vista = btn.dataset.vista;
      document.getElementById("vista-flujo").style.display = vista === "flujo" ? "block" : "none";
      document.getElementById("vista-barras").style.display = vista === "barras" ? "block" : "none";
      document.getElementById("selector-granularidad").style.display = vista === "barras" ? "flex" : "none";
      if (vista === "flujo") renderFlujo();
      else renderBarras();
    });
  });

  document.querySelectorAll(".chip-granularidad").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip-granularidad").forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      granularidadActual = btn.dataset.n;
      renderBarras();
    });
  });

  window.addEventListener("resize", () => {
    if (document.getElementById("vista-flujo").style.display !== "none") renderFlujo();
    else renderBarras();
  });

  // ── Encabezado con totales ──────────────────────────────────────────────────
  document.getElementById("total-menciones").textContent = DATA.total_menciones;
  document.getElementById("total-distintos").textContent = DATA.total_cargos_distintos;

  renderFlujo();
})();
