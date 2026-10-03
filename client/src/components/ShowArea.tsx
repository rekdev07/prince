import { twMerge } from 'tailwind-merge'
import Markdown from 'markdown-to-jsx/react'

type ShowAreaProps = {
	text?: string
	loading?: boolean
}

type PulseLineProps = {
	className?: string
}

function PulseLine({ className }: PulseLineProps) {
	return (
		<div
			className={twMerge('h-4 w-full rounded-full bg-teal-400', className)}
		/>
	)
}

function ShowArea({ text, loading }: ShowAreaProps) {
	return (
		<div className='h-56 w-auto resize-none rounded-2xl border border-gray-300 bg-gray-100 p-5 outline-none placeholder:text-gray-500 md:h-72'>
			{loading ? (
				<div className='flex animate-pulse flex-col gap-4'>
					<PulseLine />
					<PulseLine className='w-[40%]' />
				</div>
			) : (
				<Markdown className='text-teal-950'>{text}</Markdown>
			)}
		</div>
	)
}

export default ShowArea
