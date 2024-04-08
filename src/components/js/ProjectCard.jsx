import Badge from './Badge'
import ExternalIcon from './External'
import GitHubIcon from './GitHub'

function ProjectsCard(props) {
	const { title, description, link, github, image, tags } = props.PROJECTS

	return (
		<div class="grid rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
			<img
				class="h-[stretch] rounded-t-lg border-b border-gray-200 object-cover align-top dark:border-gray-600"
				src={image}
				alt=""
			/>
			<div class="self-baseline p-4">
				<h5 class="text-1gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
					{title}
				</h5>

				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
				{tags && (
					<ul class="flex flex-wrap gap-x-2 gap-y-2">
						{tags.map((tags) => (
							<li>
								<Badge TAGS={tags} />
							</li>
						))}
					</ul>
				)}
			</div>
			<div class="flex justify-between self-end border-t border-gray-200 p-4 dark:border-gray-600">
				<div>
					{link && (
						<a
							href={link}
							target="_blank"
							class="flex items-center space-x-1 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>
							<span class="mt-1 flex items-center justify-center text-sm font-medium">
								Saber más..
							</span>
							<ExternalIcon class="size-6 opacity-80" />
						</a>
					)}
				</div>

				<a
					href={github}
					target="_blank"
					class="flex items-center space-x-1 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
				>
					<GitHubIcon class="size-6 opacity-80" />
					<span class="mt-1 flex items-center justify-center text-sm font-medium">GitHub</span>
				</a>
			</div>
		</div>
	)
}

export default ProjectsCard
