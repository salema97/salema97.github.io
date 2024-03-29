import { useEffect, useState } from 'preact/hooks'

function ProjectsGallery({ imageUrls = [] }) {
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

	const imagesPerRow = windowWidth < 768 ? 2 : 3
	const imagesPerColumn = Math.ceil(imageUrls.length / imagesPerRow)

	return (
		<div className={`grid grid-cols-${imagesPerRow} gap-4 md:grid-cols-3`}>
			{/* Columna 1 */}
			<div class="grid gap-4" id="column1">
				{imageUrls.slice(0, imagesPerColumn).map((url) => (
					<img src={url} class="h-full w-full rounded-lg object-cover" aria-label={url} />
				))}
			</div>

			{/* Columna 2 */}
			<div class="grid gap-4" id="column2">
				{imageUrls.slice(imagesPerColumn, 2 * imagesPerColumn).map((url) => (
					<img src={url} class="h-full w-full rounded-lg object-cover" aria-label={url} />
				))}
			</div>

			{/* Columna 3 */}
			<div class="grid gap-4" id="column3">
				{imageUrls.slice(2 * imagesPerColumn, 3 * imagesPerColumn).map((url) => (
					<img src={url} class="h-full w-full rounded-lg object-cover" aria-label={url} />
				))}
			</div>
		</div>
	)
}

export default ProjectsGallery
