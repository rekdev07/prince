type Props = {
	type: 'editable' | 'static'
	placeholder: string
}

function TextArea({ type, placeholder }: Props) {
	const styles =
		'h-56 w-auto resize-none rounded-2xl border-2 border-teal-200 bg-teal-50 p-5 outline-none placeholder:text-teal-500 md:h-72'

	if (type === 'editable') {
		return <textarea className={styles} placeholder={placeholder}></textarea>
	} else if (type === 'static') {
		return (
			<div className={styles}>
				<p className='text-teal-500'>{placeholder}</p>
			</div>
		)
	}
}

export default TextArea
