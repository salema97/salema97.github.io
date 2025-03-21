import { TAGS } from './Tags'

export const ABOUTME = {
	name: 'Steven Lema',
	description:
		'💻| Aunque soy un programador Full-Stack, mi pasión reside especialmente en el Back-End. Sin embargo, esto no me limita en absoluto para desenvolverme en otras áreas del desarrollo.\n🩵| Mi pasión por el Software me impulsa a seguir desarrollando mis habilidades y a mantenerme al día con las últimas tecnologías. Estoy comprometido con ofrecer soluciones innovadoras y de alta calidad en cada proyecto en el que participo.\n✨| ¡Me encantaría colaborar contigo para llevar tus ideas al siguiente nivel!',
	birthday: '11/20/1997',
	location: 'Cotopaxi - Ecuador',
	study: 'Universidad de las Fuerzas Armadas - ESPE',
	email: 'salemavelasquez97@gmail.com',
	age: 0,
	interests: ['Lectura', 'Programación', 'Música', 'Videojuegos'],
	degree: 'Ingeniero de Software',
	phone: '+593 988237106'
}

const birthDate = new Date(ABOUTME.birthday)
const currentDate = new Date()
let age = currentDate.getFullYear() - birthDate.getFullYear()
const monthDiff = currentDate.getMonth() - birthDate.getMonth()
if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
	age--
}

ABOUTME.age = age

export const DEGREES = [
	{
		id: 1,
		name: 'Registro de título de "Ingeniero de Software"',
		issued: 'SENESCYT',
		issueDate: 'Noviembre 2023',
		expirationDate: '',
		credentialId: '1079-2023-2776775',
		url: '',
		description: 'Tecnologías de la Información y la Comunicación (TIC).',
		image: '/images/SOFTWARE_ENGINEERING_DEGREE.webp',
		tags: [
			TAGS.SOFTWARE_ENGINEER,
			TAGS.FULL_STACK,
			TAGS.LEADERSHIP,
			TAGS.TEAMWORK,
			TAGS.PROGRAMMING,
			TAGS.AGILE_METHODOLOGIES
		]
	},
	{
		id: 2,
		name: 'Nivel Intermedio de Inglés',
		issued: 'Unidad de Admisión y Registro de la Universidad de las Fuerzas Armadas - ESPE',
		issueDate: 'Marzo 2023',
		expirationDate: '',
		credentialId: 'PZSH0014',
		url: '',
		description: 'Equivalente al B1 del marco común europeo.',
		image: '/images/CERTIFICATE_ENGLISH.webp',
		tags: [TAGS.ENGLISH, TAGS.B1, TAGS.INTERMEDIATE_LEVEL]
	},
	{
		id: 3,
		name: 'Elaboración de artículos científicos',
		issued: 'Universidad de las Fuerzas Armadas - ESPE',
		issueDate: 'Abril 2023',
		expirationDate: '',
		credentialId: 'CEC-2023-206',
		url: '',
		description:
			'Por haber aprobado el Seminario/Taller: “Elaboración de artículos científicos”, evento académico realizado por la Institución, con una duración de 80 horas.',
		image: '/images/CERTIFICATE_WORKSHOP_SCIENTIFIC_ARTICLES.webp',
		tags: [TAGS.READING_ARTICLES, TAGS.WRITING_ARTICLES]
	},
	{
		id: 4,
		name: 'Ingeniería de Software',
		issued: 'HackerRank',
		issueDate: 'Marzo 2024',
		expirationDate: '',
		credentialId: 'DE3FAF7F6F67',
		url: 'https://www.hackerrank.com/certificates/de3faf7f6f67',
		description: 'Abarca temas como Resolución de problemas, SQL y API REST.',
		image: '/images/SOFTWARE_ENGINEER.webp',
		tags: [TAGS.SQL, TAGS.API_REST]
	},
	{
		id: 5,
		name: 'Desarrollador Frontend (React)',
		issued: 'HackerRank',
		issueDate: 'Marzo 2025',
		expirationDate: '',
		credentialId: 'D702F2BC41AD',
		url: 'https://www.hackerrank.com/certificates/d702f2bc41ad',
		description: 'Abarca temas como React, CSS y JavaScript.',
		image: '/images/FRONTEND_DEVELOPER.webp',
		tags: [TAGS.REACT, TAGS.CSS, TAGS.JAVASCRIPT]
	},
	{
		id: 6,
		name: 'SQL (Avanzado)',
		issued: 'HackerRank',
		issueDate: 'Marzo 2025',
		expirationDate: '',
		credentialId: '217D29E4F83C',
		url: 'https://www.hackerrank.com/certificates/217d29e4f83c',
		description:
			'Abarca temas como optimización de consultas, modelado de datos, indexación, funciones de ventana y pivotes en SQL.',
		image: '/images/SQL.webp',
		tags: [TAGS.SQL]
	},
	{
		id: 7,
		name: 'Angular (Intermedio)',
		issued: 'HackerRank',
		issueDate: 'Abril 2024',
		expirationDate: '',
		credentialId: '82D2A78EE957',
		url: 'https://www.hackerrank.com/certificates/82d2a78ee957',
		description:
			'Abarca temas como Routing, NgModules, Observables para transmisión de datos y manejo de eventos, Inyecciones de Dependencia y APIs.',
		image: '/images/ANGULAR.webp',
		tags: [TAGS.ANGULAR]
	},
	{
		id: 8,
		name: 'JavaScript (Intermedio)',
		issued: 'HackerRank',
		issueDate: 'Abril 2024',
		expirationDate: '',
		credentialId: '8B05437ED77E',
		url: 'https://www.hackerrank.com/certificates/8b05437ed77e',
		description:
			'Abarca temas como patrones de diseño, gestión de memoria, modelo de concurrencia y bucles de eventos, entre otros.',
		image: '/images/JAVASCRIPT.webp',
		tags: [TAGS.JAVASCRIPT]
	},
	{
		id: 9,
		name: 'API Rest (Intermedio)',
		issued: 'HackerRank',
		issueDate: 'Mayo 2024',
		expirationDate: '',
		credentialId: '20E17EB954D2',
		url: 'https://www.hackerrank.com/certificates/20e17eb954d2',
		description:
			'Abarca temas como obtener datos de una API y procesar usando parámetros o paginación.',
		image: '/images/API_REST.webp',
		tags: [TAGS.NODE, TAGS.API, TAGS.API_REST]
	},
	{
		id: 10,
		name: 'Resolución de Problemas (Intermedio)',
		issued: 'HackerRank',
		issueDate: 'Mayo 2024',
		expirationDate: '',
		credentialId: '26339B8212F1',
		url: 'https://www.hackerrank.com/certificates/26339b8212f1',
		description:
			'Abarca temas de Estructuras de Datos (como HashMaps, Pilas y Colas) y Algoritmos (como Soluciones Óptimas).',
		image: '/images/PROBLEM_SOLVING.webp',
		tags: [TAGS.SQL, TAGS.ALGORITHMS]
	},
	{
		id: 11,
		name: 'Node (Básico)',
		issued: 'HackerRank',
		issueDate: 'Abril 2024',
		expirationDate: '',
		credentialId: 'B665979B48A9',
		url: 'https://www.hackerrank.com/certificates/b665979b48a9',
		description:
			'Abarca temas como Gestión de Paquetes y Módulos, Callbacks, Bucle de Eventos, Emisor de Eventos, Buffers, Streams y Sistemas de Archivos.',
		image: '/images/NODE.webp',
		tags: [TAGS.NODE]
	},
	{
		id: 12,
		name: 'Python (Básico)',
		issued: 'HackerRank',
		issueDate: 'Abril 2024',
		expirationDate: '',
		credentialId: 'F32CAF197F02',
		url: 'https://www.hackerrank.com/certificates/f32caf197f02',
		description:
			'Abarca temas como Tipos Escalares, Operadores y Flujo de Control, Cadenas, Colecciones e Iteración, Modularidad, Objetos y Tipos y Clases.',
		image: '/images/PYTHON.webp',
		tags: [TAGS.PYTHON]
	},
	{
		id: 13,
		name: 'CSS (Básico)',
		issued: 'HackerRank',
		issueDate: 'Marzo 2024',
		expirationDate: '',
		credentialId: 'E659EE967953',
		url: 'https://www.hackerrank.com/certificates/e659ee967953',
		description:
			'Abarca temas como la exploración de Cascada y Herencia, la exploración de los fundamentos del estilizado de texto, la comprensión del uso de diseños en CSS, la comprensión del encajonado de elementos en CSS, entre otros.',
		image: '/images/CSS.webp',
		tags: [TAGS.CSS]
	},
	{
		id: 14,
		name: 'C# (Básico)',
		issued: 'HackerRank',
		issueDate: 'Marzo 2024',
		expirationDate: '',
		credentialId: '03CAE47D240B',
		url: 'https://www.hackerrank.com/certificates/03cae47d240b',
		description:
			'Esta área de competencia incluye la comprensión de la estructura de los programas C#, tipos y Variables, POO básica, Propiedades e Indexadores, Colecciones, Manejo de Excepciones, entre otros.',
		image: '/images/C_SHARP.webp',
		tags: [TAGS.CSHARP, TAGS.POO]
	}
]

export const EXPERIENCE = [
	{
		date: 'Noviembre 2023 - Actualidad',
		title: 'Freelance',
		role: 'Desarrollador de Software',
		description:
			'He desarrollado diversos proyectos en varias áreas, incluyendo el desarrollo web utilizando Vite, aplicaciones de comercio electrónico en Flutter y APIs en Node.js que integran estas aplicaciones con bases de datos MySQL. Siguiendo todo el proceso de desarrollo, desde la toma de requisitos hasta el despliegue final de cada proyecto, asegurando su correcta implementación y funcionamiento.',
		tags: [
			TAGS.FLUTTER,
			TAGS.DART,
			TAGS.NODE,
			TAGS.API_REST,
			TAGS.JAVASCRIPT,
			TAGS.MYSQL,
			TAGS.REACT,
			TAGS.VITE,
			TAGS.TYPE_SCRIPT
		]
	},
	{
		date: 'Marzo 2022 - Junio 2022',
		title: 'ADS Software',
		role: 'Pasante - Desarrollador de Software',
		description:
			'Mi experiencia laboral se centró en el diseño y desarrollo de Dynamic Link Libraries (DLLs) con el objetivo de facilitar la migración de sistemas heredados basados en Visual FoxPro hacia la plataforma moderna de Firebase.',
		tags: [TAGS.CSHARP, TAGS.FOX_PRO, TAGS.FIREBASE, TAGS.API, TAGS.DESKTOP]
	},
	{
		date: 'Diciembre 2021 - Febrero 2022',
		title: 'ACNUR',
		role: 'Pasante - Desarrollador de Software',
		description:
			'Participe en el Proyecto Social titulado (Asistencia Técnica para el Fortalecimiento de Emprendimientos de Personas Refugiadas, Solicitantes de Asilo y Personas de Interés de ACNUR en Pichincha y Santo Domingo de los Tsáchilas) en colaboración con ACNUR-HIAS-ESPE. En este proyecto, destinado a la población en movilidad humana, desempeñé el seguimiento, mantenimiento y desarrollo de la página web de Prowessec.',
		tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.SQL, TAGS.PHP, TAGS.WEB]
	}
]

export const PROJECTS = [
	{
		title: 'Pagina Web Empresarial',
		description:
			'Pagina web empresarial para una empresa de desarrollo de software, con información de la empresa, servicios, portafolio y contacto.',
		link: 'https://kaizensoftware.com.ec',
		image: '/projects/Kaizen.webp',
		tags: [TAGS.VITE, TAGS.REACT, TAGS.TYPE_SCRIPT]
	},
	{
		title: 'Panel administrativo',
		description:
			'Panel de administración para la gestión de usuarios, productos y pedidos de una tienda en línea.',
		image: '/projects/Panel.webp',
		tags: [TAGS.VITE, TAGS.REACT, TAGS.TYPE_SCRIPT]
	},
	{
		title: 'API - Node.js',
		description:
			'API documentada de un sistema que maneja compras de productos de una tienda en línea, con autenticación de usuarios y roles.',
		image: '/projects/API_Corazon.webp',
		tags: [TAGS.NODE, TAGS.JAVASCRIPT, TAGS.API_REST]
	},
	{
		title: 'CopyXpress',
		description:
			'Aplicación Movil para la tienda en línea CopyXpress, que permite a los usuarios realizar compras de productos de papelería y servicios de impresión.',
		image: '/projects/CopyXpress.webp',
		tags: [TAGS.FLUTTER, TAGS.DART, TAGS.ANDROID, TAGS.IPHONE]
	},
	{
		title: 'Re-Identificación de personas',
		description:
			'Proyecto de tesis para la re-identificación de personas basada en características biométricas y softbiométricas, mediante el uso de arquitecturas de altas prestaciones, CPUs y GPUs.',
		link: 'https://repositorio.espe.edu.ec/handle/21000/37249',
		github: 'https://github.com/salema97/RE-ID',
		image: '/projects/ProyectoTesis_1.webp',
		tags: [TAGS.PYTHON, TAGS.YOLO, TAGS.SECURITY, TAGS.THESIS]
	},
	{
		title: 'Consulta de Datos personales',
		description:
			'API para la consulta de datos personales de páginas web publicas de entidades del Ecuador mediante WebScraping.',
		link: '',
		github: 'https://github.com/salema97/API-WebScraping',
		image: '/projects/ProyectoWebScraping_2.webp',
		tags: [TAGS.API, TAGS.PYTHON, TAGS.WEB_SCRAPING]
	},
	{
		title: 'Practica con SQLMap',
		description:
			'Página web para pruebas de vulnerabilidad con SQLMap y otras técnicas de auditoría de seguridad.',
		link: '',
		github: 'https://github.com/salema97/DSS_injectionSQL',
		image: '/projects/ProyectoSeguridadWeb_2.webp',
		tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.SQL, TAGS.SECURITY]
	},
	{
		title: 'Sala de Chat',
		description:
			'Página web para una sala de chat con Socket.io, esta aplicación web en tiempo real permite a múltiples usuarios comunicarse entre sí en un entorno de chat en vivo.',
		link: '',
		github: 'https://github.com/salema97/SocketsChatRoom',
		image: '/projects/ProyectoChat_2.webp',
		tags: [TAGS.NODE, TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT]
	},
	{
		title: 'Servicio de Fotografía e Ilustración',
		description: 'Página web estática para la prestación de servicios de fotografía e ilustración.',
		link: '',
		github: 'https://github.com/salema97/dwap2-lema-steven',
		image: '/projects/ProyectoWeb_1.webp',
		tags: [TAGS.NODE, TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT]
	},
	{
		title: 'SCAFEL ECommerce',
		description:
			'Página web en desarrollo para la tienda de zapatos artesanales tejidos de la marca SCAFEL.',
		link: '',
		github: 'https://github.com/salema97/ECommerceSCAFEL',
		image: '/projects/ProyectoSeguridadWeb_1.webp',
		tags: [TAGS.ANGULAR, TAGS.SPRING_BOOT, TAGS.JAVA, TAGS.POSTGRESQL]
	},
	{
		title: 'App - Kaizen Novel',
		description:
			'Aplicación Movil para lectura y publicación de novelas o de libros, con la opción de elegir el idioma.',
		link: '',
		github: 'https://github.com/salema97/novelkaizen-frontend',
		image: '/projects/ProyectoMovil_1.webp',
		tags: [TAGS.FLUTTER, TAGS.DART, TAGS.ANDROID]
	},
	{
		title: 'Backend - Kaizen Novel',
		description: 'Cloud functions para la identificación de las novelas o libros.',
		link: '',
		github: 'https://github.com/salema97/novelkaizen-backend',
		image: '/projects/ProyectoBackendMovil_1.webp',
		tags: [TAGS.NODE, TAGS.FIREBASE, TAGS.FIRESTORE]
	}
]
