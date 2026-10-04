import { useState } from 'react'
import fetcher from '../lib/fetcher'

const ENHANCER_API_URL = `${import.meta.env.VITE_API_URL}/fix`

type FetchedResult = {
	text?: string
}

type Result = {
	ok: boolean
	error?: string
	enhancedText?: string
}

type Options = {
	enhance: boolean
	tone: 'default' | 'academic' | 'professional' | 'casual'
}

function useEnhancedText() {
	const [result, setResult] = useState<Result | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const enhanceText = async (
		text: string | undefined,
		options: Options = { enhance: false, tone: 'default' },
	) => {
		if (text?.trim()) {
			setLoading(true)
			const request = await fetcher(ENHANCER_API_URL, 'POST', {
				text: text,
				...options,
			})

			const fetchedResult: FetchedResult | undefined = request.result

			setResult({
				ok: request.ok,
				error: request.error,
				enhancedText: fetchedResult?.text,
			})

			setLoading(false)
		} else setResult({ ok: true, enhancedText: '' })
	}

	return { enhanceText, loading, result }
}

export default useEnhancedText
