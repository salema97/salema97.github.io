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
		color: COLORS.ORANGE.color
	},
	TAILWIND: {
		name: 'Tailwind CSS',
		color: COLORS.SKY.color
	},
	CSHARP: {
		name: 'C#',
		color: COLORS.VIOLET.color
	},
	HTML: {
		name: 'HTML',
		color: COLORS.ORANGE.color
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		color: COLORS.YELLOW.color
	},
	FIREBASE: {
		name: 'Firebase',
		color: COLORS.YELLOW.color
	},
	API: {
		name: 'API',
		color: COLORS.YELLOW.color
	},
	API_REST: {
		name: 'API REST',
		color: COLORS.YELLOW.color
	},
	PHP: {
		name: 'PHP',
		color: COLORS.BLUE.color
	},
	JAVA: {
		name: 'Java',
		color: COLORS.RED.color
	},
	SQL: {
		name: 'SQL',
		color: COLORS.SKY.color
	},
	POSTGRESQL: {
		name: 'PostgreSQL',
		color: COLORS.BLUE.color
	},
	CSS: {
		name: 'CSS',
		color: COLORS.BLUE.color
	},
	DESKTOP: {
		name: 'Desarrollo de aplicaciones de escritorio',
		color: COLORS.BLUE.color
	},
	WEB: {
		name: 'Desarrollo de aplicaciones web',
		color: COLORS.BLUE.color
	},
	MOVIL: {
		name: 'Desarrollo de aplicaciones móviles',
		color: COLORS.BLUE.color
	},
	FOX_PRO: {
		name: 'Visual FoxPro',
		color: COLORS.ORANGE.color
	},
	POO: {
		name: 'Programación Orientada a Objetos',
		color: COLORS.SKY.color
	},
	READING_ARTICLES: {
		name: 'Lectura de artículos científicos',
		color: COLORS.GREEN.color
	},
	WRITING_ARTICLES: {
		name: 'Redacción de artículos científicos',
		color: COLORS.GREEN.color
	},
	ENGLISH: {
		name: 'Inglés',
		color: COLORS.LIME.color
	},
	SPANISH: {
		name: 'Español',
		color: COLORS.LIME.color
	},
	B1: {
		name: 'B1',
		color: COLORS.PURPLE.color
	},
	B2: {
		name: 'B2',
		color: COLORS.FUCHSIA.color
	},
	B3: {
		name: 'B3',
		color: COLORS.PINK.color
	},
	BASIC_LEVEL: {
		name: 'Nivel básico',
		color: COLORS.PURPLE.color
	},
	INTERMEDIATE_LEVEL: {
		name: 'Nivel intermedio',
		color: COLORS.FUCHSIA.color
	},
	ADVANCED_LEVEL: {
		name: 'Nivel avanzado',
		color: COLORS.PINK.color
	},
	EXPERT_LEVEL: {
		name: 'Nivel experto',
		color: COLORS.ROSE.color
	},
	SOFTWARE_ENGINEER: {
		name: 'Ingeniero de software',
		color: COLORS.BLUE.color
	},
	FULL_STACK: {
		name: 'Full-Stack Developer',
		color: COLORS.INDIGO.color
	},
	LEADERSHIP: {
		name: 'Liderazgo',
		color: COLORS.GREEN.color
	},
	TEAMWORK: {
		name: 'Trabajo en equipo',
		color: COLORS.RED.color
	},
	PROBLEM_SOLVING: {
		name: 'Solución de problemas',
		color: COLORS.BLUE.color
	},
	PROACTIVE: {
		name: 'Proactivo',
		color: COLORS.BLUE.color
	},
	PROGRAMMING: {
		name: 'Programación',
		color: COLORS.SKY.color
	},
	AGILE_METHODOLOGIES: {
		name: 'Metodologías ágiles',
		color: COLORS.YELLOW.color
	}
}
