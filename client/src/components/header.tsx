import { type PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

import useIsScrolled from '../hooks/useIsScrolled'

type HeaderButtonProps = PropsWithChildren<{
	type?: 'button' | 'link'
	href?: string
	target?: string
	onClick?: () => void
}>

function HeaderButton({
	children,
	type = 'button',
	href,
	target,
	onClick,
}: HeaderButtonProps) {
	const styles =
		'[&_svg]:stroke-[1.5px] [&_svg]:stroke-zinc-900 dark:[&_svg]:stroke-zinc-50 [&_svg]:w-6 [&_svg]:h-6 flex items-center justify-center p-3 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-600 rounded-full transition-colors ease-out'

	if (type === 'link') {
		return (
			<a
				href={href}
				className={styles}
				target={target}
				rel='noopener noreferrer'
			>
				{children}
			</a>
		)
	} else if (type === 'button') {
		return (
			<button className={styles} onClick={onClick}>
				{children}
			</button>
		)
	}
}

type HeaderProps = PropsWithChildren

function Header({ children }: HeaderProps) {
	const { isScrolled } = useIsScrolled()

	return (
		<header
			className={twMerge(
				'fixed top-0 left-0 flex h-20 w-full items-center justify-center bg-zinc-50 px-4 outline-zinc-300/0 transition-all dark:bg-zinc-900 dark:outline-zinc-600/0',
				isScrolled
					? 'shadow-sm outline-1 outline-zinc-300 backdrop-blur-lg dark:bg-zinc-900/80 dark:outline-zinc-600'
					: '',
			)}
		>
			<div className='flex w-full max-w-6xl items-center justify-between md:px-6'>
				<h1 className='font-montserrat-alternates text-2xl font-semibold text-zinc-900 dark:text-zinc-50'>
					Prince
				</h1>
				<div className='flex gap-3'>{children}</div>
			</div>
		</header>
	)
}

export { Header, HeaderButton }
