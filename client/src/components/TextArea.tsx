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
		<div className='flex flex-col gap-5'>
			<div className='flex rounded-full border border-zinc-300 px-5 py-3.5 text-sm font-semibold text-zinc-700 dark:border-zinc-600 dark:text-zinc-300'>
				<p>English</p>
			</div>
			<textarea
				ref={textAreaRef}
				className='h-56 w-auto resize-none rounded-2xl border border-zinc-300 p-5 font-sans text-zinc-900 outline-none md:h-80 dark:border-zinc-600 dark:text-zinc-50 dark:placeholder:text-zinc-300'
				placeholder={placeholder}
				onKeyUp={onKeyUp}
			></textarea>
		</div>
	)
}

export default TextArea
