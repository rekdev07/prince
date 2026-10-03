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
			className={twMerge(
				'h-4 w-full rounded-full bg-teal-400 dark:bg-zinc-500',
				className,
			)}
		/>
	)
}

function ShowArea({ text, loading }: ShowAreaProps) {
	return (
		<div className='h-56 w-auto resize-none rounded-2xl border border-zinc-300 bg-zinc-100 p-5 text-zinc-950 outline-none md:h-72 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-50'>
			{loading ? (
				<div className='flex animate-pulse flex-col gap-4'>
					<PulseLine />
					<PulseLine className='w-[40%]' />
				</div>
			) : (
				<Markdown options={{ forceBlock: true }}>{text}</Markdown>
			)}
		</div>
	)
}

export default ShowArea
