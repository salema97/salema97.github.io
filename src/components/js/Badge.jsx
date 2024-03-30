function Badge(props) {
	let { color, name } = props.TAGS

	if (!color) {
		color = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
	}

	return (
		<span class={`${color} -900 me-2  rounded-md px-2.5 py-0.5 text-sm font-medium`}>{name}</span>
	)
}

export default Badge
