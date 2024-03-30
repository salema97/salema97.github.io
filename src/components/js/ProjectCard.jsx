import Badge from './Badge'

function ProjectsCard(props) {
	const { title, description, link, github, image, tags } = props.PROJECTS

	return (
		<div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
			<img class="rounded-t-lg" src={image} alt="" />
			<div class="p-4">
				<a href="/#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
				{tags && (
					<ul class="flex flex-wrap">
						{tags.map((tags) => (
							<li>
								<Badge TAGS={tags} />
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="flex justify-between border-t border-gray-200 p-4 dark:border-gray-600">
				<div className="flex items-center space-x-2">
					{/* <ExternalLinkIcon className="h-4 w-4 opacity-50" /> */}
					{link && <span className="text-sm font-medium">Ver</span>}
				</div>
				<div className="flex items-center space-x-2">
					{/* <GithubIcon className="h-4 w-4 opacity-50" /> */}
					<span className="text-sm font-medium">GitHub</span>
				</div>
			</div>
		</div>
	)
}

export default ProjectsCard
