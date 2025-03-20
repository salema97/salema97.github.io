import {
	FaBookReader,
	FaBrain,
	FaCode,
	FaDatabase,
	FaDesktop,
	FaFire,
	FaFirefox,
	FaGlobe,
	FaGraduationCap,
	FaJava,
	FaLanguage,
	FaLightbulb,
	FaMobile,
	FaPencilAlt,
	FaPuzzlePiece,
	FaShieldAlt,
	FaUserGraduate,
	FaUsers
} from 'react-icons/fa'
import { GrWorkshop } from 'react-icons/gr'
import {
	SiAndroid,
	SiAngular,
	SiApple,
	SiAstro,
	SiCss3,
	SiDart,
	SiFirebase,
	SiFlutter,
	SiHtml5,
	SiJavascript,
	SiMysql,
	SiNodedotjs,
	SiPhp,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSharp,
	SiSpringboot,
	SiTailwindcss,
	SiTypescript,
	SiVite
} from 'react-icons/si'

const COLORS = {
	SLATE: {
		color: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300'
	},
	GRAY: {
		color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
	},
	ZINC: {
		color: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300'
	},
	NEUTRAL: {
		color: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300'
	},
	STONE: {
		color: 'bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300'
	},
	RED: {
		color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
	},
	ORANGE: {
		color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
	},
	AMBER: {
		color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
	},
	YELLOW: {
		color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
	},
	LIME: {
		color: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300'
	},
	GREEN: {
		color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
	},
	EMERALD: {
		color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300'
	},
	TEAL: {
		color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300'
	},
	CYAN: {
		color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300'
	},
	SKY: {
		color: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300'
	},
	BLUE: {
		color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
	},
	INDIGO: {
		color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
	},
	VIOLET: {
		color: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300'
	},
	PURPLE: {
		color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
	},
	FUCHSIA: {
		color: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300'
	},
	PINK: {
		color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
	},
	ROSE: {
		color: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300'
	}
}

export const TAGS = {
	ASTRO: {
		name: 'Astro',
		color: COLORS.ORANGE.color,
		icon: SiAstro
	},
	TAILWIND: {
		name: 'Tailwind CSS',
		color: COLORS.SKY.color,
		icon: SiTailwindcss
	},
	CSHARP: {
		name: 'C#',
		color: COLORS.VIOLET.color,
		icon: SiSharp
	},
	HTML: {
		name: 'HTML',
		color: COLORS.ORANGE.color,
		icon: SiHtml5
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		color: COLORS.YELLOW.color,
		icon: SiJavascript
	},
	FIREBASE: {
		name: 'Firebase',
		color: COLORS.YELLOW.color,
		icon: SiFirebase
	},
	API: {
		name: 'API',
		color: COLORS.YELLOW.color,
		icon: FaCode
	},
	API_REST: {
		name: 'API REST',
		color: COLORS.YELLOW.color,
		icon: FaCode
	},
	PHP: {
		name: 'PHP',
		color: COLORS.BLUE.color,
		icon: SiPhp
	},
	JAVA: {
		name: 'Java',
		color: COLORS.RED.color,
		icon: FaJava
	},
	SQL: {
		name: 'SQL',
		color: COLORS.SKY.color,
		icon: FaDatabase
	},
	POSTGRESQL: {
		name: 'PostgreSQL',
		color: COLORS.BLUE.color,
		icon: SiPostgresql
	},
	CSS: {
		name: 'CSS',
		color: COLORS.BLUE.color,
		icon: SiCss3
	},
	DESKTOP: {
		name: 'Desarrollo de aplicaciones de escritorio',
		color: COLORS.BLUE.color,
		icon: FaDesktop
	},
	WEB: {
		name: 'Desarrollo de aplicaciones web',
		color: COLORS.BLUE.color,
		icon: FaGlobe
	},
	MOVIL: {
		name: 'Desarrollo de aplicaciones móviles',
		color: COLORS.BLUE.color,
		icon: FaMobile
	},
	FOX_PRO: {
		name: 'Visual FoxPro',
		color: COLORS.ORANGE.color,
		icon: FaFirefox
	},
	POO: {
		name: 'Programación Orientada a Objetos',
		color: COLORS.SKY.color,
		icon: FaCode
	},
	READING_ARTICLES: {
		name: 'Lectura de artículos científicos',
		color: COLORS.GREEN.color,
		icon: FaBookReader
	},
	WRITING_ARTICLES: {
		name: 'Redacción de artículos científicos',
		color: COLORS.GREEN.color,
		icon: FaPencilAlt
	},
	ENGLISH: {
		name: 'Inglés',
		color: COLORS.LIME.color,
		icon: FaLanguage
	},
	SPANISH: {
		name: 'Español',
		color: COLORS.LIME.color,
		icon: FaLanguage
	},
	B1: {
		name: 'B1',
		color: COLORS.PURPLE.color,
		icon: FaUserGraduate
	},
	B2: {
		name: 'B2',
		color: COLORS.FUCHSIA.color,
		icon: FaUserGraduate
	},
	B3: {
		name: 'B3',
		color: COLORS.PINK.color,
		icon: FaUserGraduate
	},
	BASIC_LEVEL: {
		name: 'Nivel básico',
		color: COLORS.PURPLE.color,
		icon: FaUserGraduate
	},
	INTERMEDIATE_LEVEL: {
		name: 'Nivel intermedio',
		color: COLORS.FUCHSIA.color,
		icon: FaUserGraduate
	},
	ADVANCED_LEVEL: {
		name: 'Nivel avanzado',
		color: COLORS.PINK.color,
		icon: FaUserGraduate
	},
	EXPERT_LEVEL: {
		name: 'Nivel experto',
		color: COLORS.ROSE.color,
		icon: FaUserGraduate
	},
	SOFTWARE_ENGINEER: {
		name: 'Ingeniero de software',
		color: COLORS.BLUE.color,
		icon: FaCode
	},
	FULL_STACK: {
		name: 'Full-Stack Developer',
		color: COLORS.INDIGO.color,
		icon: FaCode
	},
	LEADERSHIP: {
		name: 'Liderazgo',
		color: COLORS.GREEN.color,
		icon: FaUsers
	},
	TEAMWORK: {
		name: 'Trabajo en equipo',
		color: COLORS.RED.color,
		icon: FaUsers
	},
	PROBLEM_SOLVING: {
		name: 'Solución de problemas',
		color: COLORS.BLUE.color,
		icon: FaPuzzlePiece
	},
	PROACTIVE: {
		name: 'Proactivo',
		color: COLORS.BLUE.color,
		icon: FaLightbulb
	},
	PROGRAMMING: {
		name: 'Programación',
		color: COLORS.SKY.color,
		icon: FaCode
	},
	AGILE_METHODOLOGIES: {
		name: 'Metodologías ágiles',
		color: COLORS.YELLOW.color,
		icon: GrWorkshop
	},
	SPRING_BOOT: {
		name: 'Spring Boot',
		color: COLORS.GREEN.color,
		icon: SiSpringboot
	},
	ANGULAR: {
		name: 'Angular',
		color: COLORS.RED.color,
		icon: SiAngular
	},
	NODE: {
		name: 'Node',
		color: COLORS.GREEN.color,
		icon: SiNodedotjs
	},
	WEB_SCRAPING: {
		name: 'Web Scraping',
		color: COLORS.BLUE.color,
		icon: FaGlobe
	},
	PYTHON: {
		name: 'Python',
		color: COLORS.YELLOW.color,
		icon: SiPython
	},
	SECURITY: {
		name: 'Seguridad',
		color: COLORS.RED.color,
		icon: FaShieldAlt
	},
	AI: {
		name: 'Inteligencia artificial',
		color: COLORS.GREEN.color,
		icon: FaBrain
	},
	YOLO: {
		name: 'YOLO',
		color: COLORS.ORANGE.color,
		icon: FaBrain
	},
	THESIS: {
		name: 'Tesis',
		color: COLORS.PURPLE.color,
		icon: FaGraduationCap
	},
	FLUTTER: {
		name: 'Flutter',
		color: COLORS.BLUE.color,
		icon: SiFlutter
	},
	DART: {
		name: 'Dart',
		color: COLORS.SKY.color,
		icon: SiDart
	},
	ANDROID: {
		name: 'Android',
		color: COLORS.GREEN.color,
		icon: SiAndroid
	},
	FIRESTORE: {
		name: 'Firestore',
		color: COLORS.BLUE.color,
		icon: FaFire
	},
	REACT: {
		name: 'React',
		color: COLORS.SKY.color,
		icon: SiReact
	},
	MYSQL: {
		name: 'MySQL',
		color: COLORS.BLUE.color,
		icon: SiMysql
	},
	VITE: {
		name: 'Vite',
		color: COLORS.YELLOW.color,
		icon: SiVite
	},
	TYPE_SCRIPT: {
		name: 'TypeScript',
		color: COLORS.BLUE.color,
		icon: SiTypescript
	},
	IPHONE: {
		name: 'iPhone',
		color: COLORS.ROSE.color,
		icon: SiApple
	}
}
