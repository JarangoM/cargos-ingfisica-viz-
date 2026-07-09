// Generado automáticamente desde ing_fisica.ipynb — no editar a mano.
const CARGOS_DATA = {
  "generado": "agrupacion de cargos en 4 / 6 / 8 categorias",
  "total_menciones": 332,
  "total_cargos_distintos": 227,
  "niveles": {
    "4": [
      {
        "id": "L4_1",
        "nombre": "Investigación y Academia",
        "conteo": 119,
        "color": "#4C6EF5"
      },
      {
        "id": "L4_4",
        "nombre": "Gestión, Negocios y Prácticas",
        "conteo": 116,
        "color": "#BE4BDB"
      },
      {
        "id": "L4_3",
        "nombre": "Datos, Software e IA",
        "conteo": 61,
        "color": "#12B886"
      },
      {
        "id": "L4_2",
        "nombre": "Ingeniería y Desarrollo Técnico",
        "conteo": 36,
        "color": "#F76707"
      }
    ],
    "6": [
      {
        "id": "L6_1",
        "nombre": "Investigación y Academia",
        "conteo": 119,
        "padre": "L4_1"
      },
      {
        "id": "L6_6",
        "nombre": "Prácticas, Estudiantes y Otros",
        "conteo": 74,
        "padre": "L4_4"
      },
      {
        "id": "L6_3",
        "nombre": "Datos, Software y TI",
        "conteo": 61,
        "padre": "L4_3"
      },
      {
        "id": "L6_2",
        "nombre": "Ingeniería y Desarrollo Técnico",
        "conteo": 36,
        "padre": "L4_2"
      },
      {
        "id": "L6_5",
        "nombre": "Negocios, Consultoría y Análisis",
        "conteo": 22,
        "padre": "L4_4"
      },
      {
        "id": "L6_4",
        "nombre": "Gestión y Liderazgo",
        "conteo": 20,
        "padre": "L4_4"
      }
    ],
    "8": [
      {
        "id": "G1",
        "nombre": "Investigación",
        "conteo": 97,
        "padre_l6": "L6_1",
        "padre_l4": "L4_1"
      },
      {
        "id": "G8",
        "nombre": "Prácticas, Estudiantes y Otros",
        "conteo": 74,
        "padre_l6": "L6_6",
        "padre_l4": "L4_4"
      },
      {
        "id": "G4",
        "nombre": "Ciencia de Datos e IA",
        "conteo": 37,
        "padre_l6": "L6_3",
        "padre_l4": "L4_3"
      },
      {
        "id": "G3",
        "nombre": "Ingeniería y Desarrollo Técnico",
        "conteo": 36,
        "padre_l6": "L6_2",
        "padre_l4": "L4_2"
      },
      {
        "id": "G5",
        "nombre": "Desarrollo de Software y TI",
        "conteo": 24,
        "padre_l6": "L6_3",
        "padre_l4": "L4_3"
      },
      {
        "id": "G2",
        "nombre": "Docencia y Academia",
        "conteo": 22,
        "padre_l6": "L6_1",
        "padre_l4": "L4_1"
      },
      {
        "id": "G7",
        "nombre": "Negocios, Consultoría y Análisis",
        "conteo": 22,
        "padre_l6": "L6_5",
        "padre_l4": "L4_4"
      },
      {
        "id": "G6",
        "nombre": "Gestión y Liderazgo",
        "conteo": 20,
        "padre_l6": "L6_4",
        "padre_l4": "L4_4"
      }
    ]
  },
  "cargos": [
    {
      "cargo": "Asistente de Investigación",
      "conteo": 16,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Practicante",
      "conteo": 11,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Investigador",
      "conteo": 8,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Practicante de Investigación",
      "conteo": 7,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Asistente de investigación",
      "conteo": 7,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Práctica de Investigación",
      "conteo": 5,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero de Investigación y Desarrollo",
      "conteo": 4,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Investigador Joven",
      "conteo": 4,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Pasante",
      "conteo": 4,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante de Ingeniería",
      "conteo": 4,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Práctica Estudiantil",
      "conteo": 3,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Investigación de Posgrado",
      "conteo": 3,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Auxiliar de investigación",
      "conteo": 3,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Asistente de Docencia",
      "conteo": 3,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Científico de datos",
      "conteo": 3,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Científico de Datos",
      "conteo": 3,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista de datos",
      "conteo": 3,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Científica de datos",
      "conteo": 3,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista de Rendimiento",
      "conteo": 3,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Interno",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Profesor",
      "conteo": 2,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Investigación",
      "conteo": 2,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Aprendiz en Práctica",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Laboratorio",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Auxiliar Consultor",
      "conteo": 2,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Docencia de Posgrado",
      "conteo": 2,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero",
      "conteo": 2,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Asistente de laboratorio",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante universitaria",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Doctorando CIFRE",
      "conteo": 2,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Estudiante de Doctorado",
      "conteo": 2,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Joven investigadora",
      "conteo": 2,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Desarrollador de Software",
      "conteo": 2,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Ingeniero de DevOps y Software",
      "conteo": 2,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Consultor",
      "conteo": 2,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante investigador",
      "conteo": 2,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Estudiante Practicante",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Analista de Gestión de Riesgos",
      "conteo": 2,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Becario de investigación",
      "conteo": 2,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero de Datos",
      "conteo": 2,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Consultor Junior",
      "conteo": 2,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante en prácticas",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Investigador Bioinformático",
      "conteo": 2,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Talento B Senior",
      "conteo": 2,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero de software",
      "conteo": 2,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista de Datos",
      "conteo": 2,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Asistencia de Investigación",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Mentor de Tecnología",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asesor Técnico",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Instructor de Física y Matemáticas (Pregrado)",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Estudiante",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Investigador Postdoctoral",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Beca Postdoctoral",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Académico Visitante Fulbright",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Docente de cátedra (Aprendizaje basado en proyectos)",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Asistente de contenidos Universidad de los niños",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Coordinadora de Ingeniería a la n",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Especialista en Gestión del Desempeño",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Creador de Contenido Independiente",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Socio y Director de Redes Sociales",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero de Diseño y Desarrollo de Productos, Gerente de Proyecto, Asistente de Investigación",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Profesor Adjunto en Ingeniería de Diseño de Productos",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Director de Investigación y Desarrollo",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Especialista en Registro Geofísico de Pozos | Operaciones de Campo",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Colaborador académico – Geofísica (Ad Honorem)",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Consultor Geofísico – Investigaciones Geotécnicas",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Profesor de Medio Tiempo",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Consultor de Investigación - \"Energética 2030\"",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Practicante División Logística",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Monitor de Investigación",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Coordinador e Investigador Semillero de Física Teórica y Computacional",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante de I+D+i (Maestría) y Analista de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Investigador de Doctorado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Investigador postdoctoral Marie Sklodowska-Curie COFUND -PSPHERE-",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Prácticas profesionales",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante de investigación. Grupo de Óptica Aplicada, Universidad EAFIT",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Estudiante Practicante. INTA. Departamento de Cargas Útiles Satelitales",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Cuentas",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante Investigador",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero de Fabricación de Equipos",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniero de Proyecto",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Asistente de Investigación de Pregrado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Metalmecánica",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Práctica Profesional - Proyecto de Vigilancia Tecnológica CubeSat",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Líder de Proyecto EAFITHAB 1. Misión de Globo de Gran Altitud EAFIT, Global Space Balloon Challenge GSBC",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Académico Visitante",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Emprendedor independiente",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Modelador Matemático",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Cofundador y Director de Tecnología",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante de Ingeniería de I+D",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniero de Investigación",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Candidato a Doctorado en Mecatrónica",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Monitora en el Proyecto de investigación Apropiación de materiales Holográficos",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Joven investigadora en el proyecto Aplicación de nanopartículas de hierro en de plantas de maíz",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Candidato a Doctorado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Especialista en riesgos",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Director de riesgos",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Desarrollador de Proyectos Electrónicos",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniera de Proyecto de Investigación",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Doctorado/Ingeniero de investigación/desarrollo",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Investigador de Baterías / Estudiante de Doctorado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Doctorado en modelado de baterías de iones de litio",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Practicante Profesional - Innovación y Calidad",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Docente universitaria de física",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Profesora de robótica",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero en Mecatrónica",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniero de IA/ML",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Ingeniero de desarrollo (cátodos de nanotubos de carbono)",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Investigador Doctoral",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero de Diseño Mecánico",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Innovaciones y Estrategias para Logística y Cadenas de Suministro",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente Científico",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero de Inteligencia Artificial",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Asistente administrativa de la Maestría en Física Aplicada",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante en desarrollo sostenible",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Calidad y Producción",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante de Investigación de Pregrado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Estudiante de Investigación de Posgrado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Doctorado en MEMS (Sistemas Microelectromecánicos) para Recolección de Energía.",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Ingeniero de Investigación en síntesis de materiales para componentes de alta resistencia mecánica",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Investigador y Asistente de Docencia en Ciencia de Materiales",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Joven investigador",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Coordinadora Semillero Microingeniería",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Coordinadora de laboratorio y control",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Coordinador de operaciones",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Innovación",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante de Frontend",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Monitor Asistente Administrativo",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Prácticas Profesionales",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Investigación - Estudiante de Maestría en Física Aplicada",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Coordinador del equipo de analítica",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Programador",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Auxiliar ciencia y tecnología",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Profesional Ciencia y Tecnología",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Profesional Formulación de Proyectos",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Monitor académico",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Asistente de Tecnología de la Información",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Desarrollador de software",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Práctica de Maestría 2",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Misión de enseñanza",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Jefe de Proyecto",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Analista de analítica",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista de desarrollo",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Analista de negocio",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Desarrollador Funcional",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Practicante en grupo de investigación de física de partículas experimental",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero de caracterización",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Investigador SENNOVA",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Administrador de Sistemas IT y Especialista BI",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Líder IT e Investigador",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Líder de Ciencia de Datos",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Investigador Practicante",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Investigador de Ciencia de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Practicante de Fotónica",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Investigación y Docencia de Posgrado",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Asistente de Investigación | Tecnología Vestible y Aprendizaje Automático",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Consultor | Validación de Sistemas de Salud e IA",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista Consultor | Cumplimiento Financiero y Detección de Anomalías",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero Junior de HubSpot",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Ingeniero de Nivel Medio de HubSpot",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Práctica en sistemas de telecomunicaciones",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Arquitecto de Soluciones de IA",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Investigador - Oceanografía Operacional",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Líder de Equipo/Técnico - Ingeniero de Datos de HubSpot",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Líder Técnico - Ingeniero de Datos",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Aprendiz de Mantenimiento Predictivo",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante de Visión Industrial",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero de Manufactura y Digitalización - OGP",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Desarrollador de Aplicaciones de Software",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Desarrollador de IA",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Miembro Fundador del Equipo, Científico de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Profesional en contenidos",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante de Maestría",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Contrato de Tiempo Completo",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Desarrollador de back-end",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Físico Ingeniero",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Practicante Analista de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Ingeniero Junior",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Asistente de Investigación en Energía Solar",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Científico de datos | Joven investigador",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista Analítica Comercial",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Coordinador de TIC",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Consultor BI-TI",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista Senior de Gobierno de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Inteligencia de Negocios",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero - Proyecto de Mantenimiento Predictivo",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Líder de Proyecto de Verificación y Validación",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Programador full stack",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Desarrollador React",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista de Bienes Raíces y Factoraje",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Practicante Asistente de Investigación",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Gerente de Negocios",
      "conteo": 1,
      "g8": "G6",
      "l6": "L6_4",
      "l4": "L4_4"
    },
    {
      "cargo": "Estudiante de Pregrado",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Investigación en el proyecto 4DAir EAFIT-MINCIENCIAS.",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Tesis de Maestría",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Joven Embajador",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de Ingeniero de Métodos – Producción Industrial",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniero de Cumplimiento Normativo y Sostenibilidad",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniero de IA",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Talento B Junior",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Asistente de proyecto",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Profesora",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Ingeniero de Desarrollo de Procesos",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Contratista",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero Junior de Software",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Ingeniero de Software Full Stack",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Investigador Analista I",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Investigador Analista II",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Desarrollador de Aplicaciones",
      "conteo": 1,
      "g8": "G5",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Académico Investigador",
      "conteo": 1,
      "g8": "G2",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Técnico de Laboratorio",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Practicante de Investigación de Posgrado",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    },
    {
      "cargo": "Embajador de Vinculación de Aceleradora",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Metrólogo",
      "conteo": 1,
      "g8": "G8",
      "l6": "L6_6",
      "l4": "L4_4"
    },
    {
      "cargo": "Analista de ingeniería",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Analista de Información",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero Junior de Mantenimiento",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Ingeniero de diseño y prototipado",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Practicante en Ciencia de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista Funcional",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero de datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Ciencia de Datos",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Analista de riesgos",
      "conteo": 1,
      "g8": "G7",
      "l6": "L6_5",
      "l4": "L4_4"
    },
    {
      "cargo": "Ingeniero de Aprendizaje Automático",
      "conteo": 1,
      "g8": "G4",
      "l6": "L6_3",
      "l4": "L4_3"
    },
    {
      "cargo": "Asistente de Ingeniería",
      "conteo": 1,
      "g8": "G3",
      "l6": "L6_2",
      "l4": "L4_2"
    },
    {
      "cargo": "Investigador en Educación",
      "conteo": 1,
      "g8": "G1",
      "l6": "L6_1",
      "l4": "L4_1"
    }
  ]
};
