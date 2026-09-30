type Props = {
	placeholder?: string
	onKeyUp?: () => void
}

function TextArea({ placeholder, onKeyUp }: Props) {
	return (
		<textarea
			className='h-56 w-auto resize-none rounded-2xl border-2 border-teal-200 bg-teal-50 p-5 outline-none placeholder:text-teal-500 md:h-72'
			placeholder={placeholder}
			onKeyUp={onKeyUp}
		></textarea>
	)
}

export default TextArea
