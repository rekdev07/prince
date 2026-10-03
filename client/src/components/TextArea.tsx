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
			className='h-56 w-auto resize-none rounded-2xl border border-zinc-300 p-5 outline-none placeholder:text-gray-600 md:h-72 dark:border-zinc-600 dark:placeholder:text-zinc-300 dark:text-zinc-50'
			placeholder={placeholder}
			onKeyUp={onKeyUp}
		></textarea>
	)
}

export default TextArea
