function Badge(props) {
	let { color, name, icon: Icon } = props.TAGS

	if (!color) {
		color = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
	}

	return (
		<span
			className={`${color} -900 me-2 inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium`}
		>
			{Icon && <Icon className="mr-2 h-3.5 w-3.5" />}
			{name}
		</span>
	)
}

export default Badge
