import { useState } from 'react'

import './App.css'
import Controls from './components/Controls'

import Header from './components/header'
import TextArea from './components/TextArea'
import ShowArea from './components/ShowArea'

function App() {
	const [loading, setLoading] = useState<boolean>(false)
	const [showAreaValue, setShowAreaValue] = useState<string | undefined>('')

	type Result = {
		text?: string
	}

	const onTypeFinishedHandler = async (v: string | undefined) => {
		if (!v?.trim()) setShowAreaValue('')

		if (!loading && v?.trim()) {
			try {
				setLoading(true)

				const response = await fetch(`${import.meta.env.VITE_API_URL}/fix`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						enhance: false,
						tone: 'default',
						text: v,
					}),
				})

				if (!response.ok) {
					setShowAreaValue('There was an error')
					setLoading(false)
				}

				const result: Result = await response.json()
				const text = result.text

				if (text) setShowAreaValue(text)

				setLoading(false)
			} catch (e) {
				setLoading(false)
				setShowAreaValue(`An unexpected error has ocurred: ${e}`)
			}
		}
	}

	return (
		<>
			<Header />
			<main className='flex w-full justify-center px-4'>
				<div className='grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_192px]'>
					<TextArea
						placeholder='Write or paste your text here'
						onTypeFinished={onTypeFinishedHandler}
						onTypeFinishedTimeout={1000}
					/>
					<ShowArea text={showAreaValue} loading={loading} />
					<Controls />
				</div>
			</main>
		</>
	)
}

export default App
