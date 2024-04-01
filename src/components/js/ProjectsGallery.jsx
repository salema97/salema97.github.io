import { useEffect, useState } from 'preact/hooks'
import ProjectsCard from './ProjectCard'

function ProjectsGallery({ PROJECTS }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const imagesPerRow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3
	const imagesPerColumn = Math.ceil(PROJECTS.length / imagesPerRow)

	return (
		<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{/* Columna 1 */}
			<div class="grid justify-center gap-4" id="column1">
				{PROJECTS.slice(0, imagesPerColumn).map((projects) => (
					<ProjectsCard PROJECTS={projects} />
				))}
			</div>

			{/* Columna 2 */}
			<div class="grid justify-center gap-4" id="column2">
				{PROJECTS.slice(imagesPerColumn, 2 * imagesPerColumn).map((projects) => (
					<ProjectsCard PROJECTS={projects} />
				))}
			</div>

			{/* Columna 3 */}
			<div class="grid justify-center gap-4" id="column3">
				{PROJECTS.slice(2 * imagesPerColumn, 3 * imagesPerColumn).map((projects) => (
					<ProjectsCard PROJECTS={projects} />
				))}
			</div>
		</div>
	)
}

export default ProjectsGallery
