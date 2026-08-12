// =============================================================================
// VISUALIZACIÓN INTERACTIVA — SECTORES DE EMPLEO DE EGRESADOS (GRÁFICOS DE TORTA)
// =============================================================================
// Vanilla JS + SVG, sin dependencias externas (funciona abriendo el .html
// directamente en el navegador, sin servidor). Lee los datos de la constante
// global SECTORES_DATA definida en sectores_datos.js.
//
// Matriz de gráficos de torta (filas = periodo, columnas = trabajo 1..5) con
// colores de sector consistentes en toda la visualización, una leyenda fija
// en la parte inferior, y un panel lateral que se abre al hacer clic en un
// sector para mostrar los empleadores asociados a ese sector, en ese
// trabajo, periodo y ámbito específicos.
// =============================================================================

(function () {
  "use strict";

  const DATA = SECTORES_DATA;
  const NS = "http://www.w3.org/2000/svg";
  const esOscuro = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  function colorDeCategoria(catId) {
    const cat = DATA.categorias.find((c) => c.id === catId);
    if (!cat) return "#888888";
    return esOscuro() ? cat.colorOscuro : cat.colorClaro;
  }

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

  // contexto = { ambito, periodoId, periodoLabel, trabajo }
  function renderPie(svg, cx, cy, r, items, total, filtro, contexto) {
    let anguloActual = 0;
    items.forEach((it) => {
      const anguloSlice = (it.frecuencia / total) * 360;
      const anguloInicio = anguloActual;
      const anguloFin = anguloActual + anguloSlice;
      anguloActual = anguloFin;
      const medio = anguloInicio + anguloSlice / 2;

      const esSeleccionado = !!filtro && it.categoria === filtro;
      const estaAtenuado = !!filtro && !esSeleccionado;
      const colorRelleno = estaAtenuado ? GRIS_ATENUADO : colorDeCategoria(it.categoria);
      const esActivoEnPanel = panelActivo &&
        panelActivo.ambito === contexto.ambito &&
        panelActivo.periodoId === contexto.periodoId &&
        panelActivo.trabajo === contexto.trabajo &&
        panelActivo.categoria === it.categoria;

      // Al resaltar un sector, su slice se "explota" levemente hacia afuera
      // para que salte a la vista en los gráficos de toda la matriz a la vez.
      const desplazamiento = esSeleccionado ? polarAPunto(0, 0, 7, medio) : { x: 0, y: 0 };
      const transformAttr = esSeleccionado ? `translate(${desplazamiento.x} ${desplazamiento.y})` : "";

      // Un slice de 360° (un único sector al 100%) degenera en un arco de
      // longitud cero: inicio y fin del path coinciden y no se dibuja nada.
      // En ese caso se dibuja un círculo completo en su lugar.
      const esCirculoCompleto = anguloSlice >= 359.99;
      let claseSlice = "slice" + (esSeleccionado ? " resaltado" : "") + (esActivoEnPanel ? " activo" : "");
      const path = svgEl(esCirculoCompleto ? "circle" : "path", esCirculoCompleto
        ? { cx, cy, r, fill: colorRelleno, stroke: "var(--panel)", "stroke-width": "1.5", class: claseSlice }
        : {
            d: arcoSlicePath(cx, cy, r, anguloInicio, anguloFin),
            fill: colorRelleno,
            stroke: "var(--panel)",
            "stroke-width": esSeleccionado ? "2.5" : "1.5",
            class: claseSlice,
          });
      if (estaAtenuado) path.setAttribute("opacity", "0.55");
      if (transformAttr) path.setAttribute("transform", transformAttr);
      svg.appendChild(path);

      path.addEventListener("mousemove", (e) => {
        mostrarTooltip(
          `<div class="tt-sector">${it.sector}</div>` +
            `<div>${it.frecuencia} egresado${it.frecuencia === 1 ? "" : "s"} · ${it.porcentaje}%</div>` +
            `<div class="tt-pista">Clic para ver empleadores (${it.empleadores.length})</div>`,
          e
        );
      });
      path.addEventListener("mouseleave", ocultarTooltip);
      path.addEventListener("click", () => {
        ocultarTooltip();
        filtroActual = it.categoria;
        selectFiltro.value = it.categoria;
        abrirPanelEmpleadores(contexto, it);
        renderTodo();
      });

      // Etiqueta directa: siempre para el sector resaltado (aunque el slice
      // sea pequeño, con línea guía hacia afuera); si no hay filtro, solo
      // para slices suficientemente grandes.
      if (esSeleccionado && anguloSlice < 20) {
        const puntoBorde = polarAPunto(cx, cy, r, medio);
        const puntoEtiqueta = polarAPunto(cx, cy, r + 22, medio);
        const linea = svgEl("line", {
          x1: puntoBorde.x, y1: puntoBorde.y,
          x2: puntoEtiqueta.x, y2: puntoEtiqueta.y,
          class: "linea-guia",
        });
        svg.appendChild(linea);

        const texto = it.porcentaje + "%";
        const anchoAprox = texto.length * 6 + 8;
        const rect = svgEl("rect", {
          x: puntoEtiqueta.x - anchoAprox / 2, y: puntoEtiqueta.y - 9,
          width: anchoAprox, height: 16, rx: 4,
          class: "fondo-etiqueta",
        });
        svg.appendChild(rect);

        const label = svgEl("text", {
          x: puntoEtiqueta.x, y: puntoEtiqueta.y,
          class: "etiqueta-slice resaltada",
          "text-anchor": "middle",
          dy: "0.35em",
        });
        label.textContent = texto;
        svg.appendChild(label);
      } else if (anguloSlice >= 20) {
        const posEtiqueta = polarAPunto(cx, cy, r * 0.65, medio);
        const texto = svgEl("text", {
          x: posEtiqueta.x + (esSeleccionado ? desplazamiento.x : 0),
          y: posEtiqueta.y + (esSeleccionado ? desplazamiento.y : 0),
          class: "etiqueta-slice",
          "text-anchor": "middle",
          dy: "0.35em",
          style: esSeleccionado ? "font-size:11.5px" : "",
        });
        texto.textContent = it.porcentaje + "%";
        svg.appendChild(texto);
      }
    });
  }

  function crearTarjetaGrafico(trabajoData, tituloTop, tituloBottom, filtro, contexto) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-grafico";

    const titulo = document.createElement("div");
    titulo.className = "titulo-grafico";
    titulo.textContent = tituloTop;
    tarjeta.appendChild(titulo);

    const subtitulo = document.createElement("div");
    subtitulo.className = "subtitulo-grafico";
    subtitulo.textContent = tituloBottom;
    tarjeta.appendChild(subtitulo);

    if (!trabajoData.items.length || trabajoData.total === 0) {
      tarjeta.classList.add("vacia");
      const msg = document.createElement("div");
      msg.textContent = "Sin datos";
      tarjeta.appendChild(msg);
      return tarjeta;
    }

    const size = 150;
    const r = 60;
    const cx = size / 2;
    const cy = size / 2;
    const svg = svgEl("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}` });
    renderPie(svg, cx, cy, r, trabajoData.items, trabajoData.total, filtro, contexto);
    tarjeta.appendChild(svg);

    if (filtro && !trabajoData.items.some((it) => it.categoria === filtro)) {
      const nota = document.createElement("div");
      nota.className = "nota-ausente";
      nota.textContent = "Sector no registrado en este grupo";
      tarjeta.appendChild(nota);
    }

    return tarjeta;
  }

  // =============================================================================
  // MATRIZ DE GRÁFICOS POR ÁMBITO (nacional / internacional)
  // =============================================================================

  function renderAmbito(ambito, filtro) {
    const cont = document.getElementById("contenedor-principal");
    cont.innerHTML = "";

    const periodos = DATA[ambito];
    const nombreAmbito = ambito === "nacional" ? "NACIONAL" : "INTERNACIONAL";

    periodos.forEach((periodo) => {
      const grupo = document.createElement("section");
      grupo.className = "grupo-periodo";

      const h2 = document.createElement("h2");
      h2.innerHTML = `Sectores por trabajo — ${periodo.label} <span class="n-periodo">(${nombreAmbito} · ${periodo.total_egresados} egresados en el intervalo)</span>`;
      grupo.appendChild(h2);

      const fila = document.createElement("div");
      fila.className = "fila-graficos";

      periodo.trabajos.forEach((trabajo) => {
        const contexto = { ambito, periodoId: periodo.id, periodoLabel: periodo.label, trabajo: trabajo.trabajo };
        const tarjeta = crearTarjetaGrafico(
          trabajo,
          `Trabajo ${trabajo.trabajo}`,
          trabajo.total ? `n = ${trabajo.total}` : "",
          filtro,
          contexto
        );
        fila.appendChild(tarjeta);
      });

      grupo.appendChild(fila);
      cont.appendChild(grupo);
    });
  }

  // =============================================================================
  // LEYENDA FIJA — categorías presentes en el ámbito activo
  // =============================================================================

  function renderLeyenda(ambito, filtro) {
    const leyenda = document.getElementById("leyenda-fija");
    leyenda.innerHTML = "";
    leyenda.classList.toggle("filtro-activo", !!filtro);

    const presentes = new Set();
    DATA[ambito].forEach((periodo) =>
      periodo.trabajos.forEach((trabajo) =>
        trabajo.items.forEach((it) => presentes.add(it.categoria))
      )
    );

    const etiqueta = document.createElement("span");
    etiqueta.className = "leyenda-etiqueta";
    etiqueta.textContent = "Sectores";
    leyenda.appendChild(etiqueta);

    DATA.categorias
      .filter((cat) => presentes.has(cat.id))
      .forEach((cat) => {
        const item = document.createElement("span");
        item.className = "item-leyenda" + (cat.id === filtro ? " seleccionado" : "");
        const punto = document.createElement("span");
        punto.className = "punto";
        punto.style.background = esOscuro() ? cat.colorOscuro : cat.colorClaro;
        item.appendChild(punto);
        const texto = document.createElement("span");
        texto.textContent = cat.nombre;
        item.appendChild(texto);
        leyenda.appendChild(item);
      });
  }

  // =============================================================================
  // PANEL LATERAL DE EMPLEADORES
  // -----------------------------------------------------------------------------
  // Se abre al hacer clic en un sector de cualquier gráfico. Muestra los
  // empleadores de ESE sector, en ESE trabajo/periodo/ámbito específicos
  // (no mezcla empleadores de otros gráficos de la matriz).
  // =============================================================================

  const panelEmpleadores = document.getElementById("panel-empleadores");
  const fondoPanel = document.getElementById("fondo-panel");
  const contenedorPrincipal = document.getElementById("contenedor-principal");
  const panelCuerpo = document.getElementById("panel-cuerpo");
  const panelOrdenSelect = document.getElementById("panel-orden-select");

  let panelActivo = null; // { ambito, periodoId, trabajo, categoria } — para resaltar el slice activo
  let empleadoresActuales = [];
  let ordenActual = "desc";

  function renderEmpleadores() {
    panelCuerpo.innerHTML = "";
    if (!empleadoresActuales.length) {
      const vacio = document.createElement("div");
      vacio.id = "panel-vacio";
      vacio.textContent = "No hay empleadores registrados para este sector en este grupo.";
      panelCuerpo.appendChild(vacio);
      return;
    }
    const lista = empleadoresActuales.slice();
    if (ordenActual === "desc") lista.sort((a, b) => b.frecuencia - a.frecuencia);
    else if (ordenActual === "asc") lista.sort((a, b) => a.frecuencia - b.frecuencia);
    else lista.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

    lista.forEach((emp) => {
      const fila = document.createElement("div");
      fila.className = "fila-empleador";
      const nombre = document.createElement("span");
      nombre.className = "nombre-empleador";
      nombre.textContent = emp.nombre;
      nombre.title = emp.nombre;
      const conteo = document.createElement("span");
      conteo.className = "conteo-empleador";
      conteo.textContent = emp.frecuencia;
      fila.appendChild(nombre);
      fila.appendChild(conteo);
      panelCuerpo.appendChild(fila);
    });
  }

  function abrirPanelEmpleadores(contexto, item) {
    panelActivo = {
      ambito: contexto.ambito,
      periodoId: contexto.periodoId,
      trabajo: contexto.trabajo,
      categoria: item.categoria,
    };
    empleadoresActuales = item.empleadores || [];

    document.getElementById("panel-nombre-sector").textContent = item.sector;
    document.getElementById("panel-punto").style.background = colorDeCategoria(item.categoria);
    const nombreAmbito = contexto.ambito === "nacional" ? "Nacional" : "Internacional";
    document.getElementById("panel-subtitulo").textContent =
      `${contexto.periodoLabel} · Trabajo ${contexto.trabajo} · ${nombreAmbito}`;
    document.getElementById("panel-resumen").innerHTML =
      `<strong>${item.frecuencia}</strong> egresado${item.frecuencia === 1 ? "" : "s"} (${item.porcentaje}%) en ` +
      `<strong>${empleadoresActuales.length}</strong> empleador${empleadoresActuales.length === 1 ? "" : "es"} distinto${empleadoresActuales.length === 1 ? "" : "s"}`;

    renderEmpleadores();

    panelEmpleadores.classList.add("abierto");
    fondoPanel.classList.add("visible");
    contenedorPrincipal.classList.add("con-panel");
  }

  function cerrarPanelEmpleadores() {
    panelActivo = null;
    panelEmpleadores.classList.remove("abierto");
    fondoPanel.classList.remove("visible");
    contenedorPrincipal.classList.remove("con-panel");
    renderTodo();
  }

  document.getElementById("cerrar-panel").addEventListener("click", cerrarPanelEmpleadores);
  fondoPanel.addEventListener("click", cerrarPanelEmpleadores);
  panelOrdenSelect.addEventListener("change", () => {
    ordenActual = panelOrdenSelect.value;
    renderEmpleadores();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panelEmpleadores.classList.contains("abierto")) cerrarPanelEmpleadores();
  });

  // =============================================================================
  // FILTRO DE SECTOR — la lista desplegable centra la atención en un sector
  // =============================================================================

  const selectFiltro = document.getElementById("filtro-sector");
  const btnLimpiarFiltro = document.getElementById("btn-limpiar-filtro");

  DATA.categorias.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = cat.nombre;
    selectFiltro.appendChild(opt);
  });

  // =============================================================================
  // TABS, FILTRO Y ARRANQUE
  // =============================================================================

  let ambitoActual = "nacional";
  let filtroActual = "";

  function renderTodo() {
    renderAmbito(ambitoActual, filtroActual || null);
    renderLeyenda(ambitoActual, filtroActual || null);
    btnLimpiarFiltro.classList.toggle("visible", !!filtroActual);
  }

  function activarAmbito(ambito) {
    ambitoActual = ambito;
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("activo", b.dataset.ambito === ambito);
    });
    // Cambiar de ámbito invalida el contexto del panel abierto (pertenece
    // al otro ámbito), así que se cierra para evitar mostrar datos que ya
    // no corresponden a lo que se ve en la matriz.
    if (panelActivo && panelActivo.ambito !== ambito) cerrarPanelEmpleadores();
    renderTodo();
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => activarAmbito(btn.dataset.ambito));
  });

  selectFiltro.addEventListener("change", () => {
    filtroActual = selectFiltro.value;
    renderTodo();
  });

  btnLimpiarFiltro.addEventListener("click", () => {
    filtroActual = "";
    selectFiltro.value = "";
    renderTodo();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", renderTodo);

  activarAmbito("nacional");
})();
