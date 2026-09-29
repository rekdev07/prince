import './App.css'
import Controls from './components/Controls'

import Header from './components/header'
import TextArea from './components/TextArea'

function App() {
	return (
		<>
			<Header />
			<main className='flex w-full justify-center px-4'>
				<div className='grid w-full max-w-5xl grid-cols-1 md:grid-cols-[1fr_1fr_192px] gap-6'>
					<TextArea
						type='editable'
						placeholder='Write or paste your text here'
					/>
					<TextArea type='static' placeholder='' />
					<Controls />
				</div>
			</main>
		</>
	)
}

export default App
