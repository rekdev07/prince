import { useState, useEffect } from 'react'

function useIsScrolled() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	const scrollHandler = () => setIsScrolled(window.pageYOffset > 0)

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)

		return () => window.removeEventListener('scroll', scrollHandler)
	}, [])

	return { isScrolled }
}

export default useIsScrolled
