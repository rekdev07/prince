import { useRef } from 'react'

type Props = {
	placeholder?: string
	onTypeFinished?: (value: string | undefined) => void
	onTypeFinishedTimeout?: number
}

function TextArea({
	placeholder,
	onTypeFinished,
	onTypeFinishedTimeout = 500,
}: Props) {
	const timeOutRef = useRef<number | null>(null)
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

	const onKeyUp = () => {
		if (timeOutRef.current) clearTimeout(timeOutRef.current)

		const timeout = setTimeout(() => {
			if (onTypeFinished) onTypeFinished(textAreaRef.current?.value)
		}, onTypeFinishedTimeout)

		timeOutRef.current = timeout
	}

	return (
		<textarea
			ref={textAreaRef}
			className='h-56 w-auto resize-none rounded-2xl border-2 border-teal-200 bg-teal-50 p-5 outline-none placeholder:text-teal-500 md:h-72'
			placeholder={placeholder}
			onKeyUp={onKeyUp}
		></textarea>
	)
}

export default TextArea
