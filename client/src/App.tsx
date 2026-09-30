import './App.css'
import Controls from './components/Controls'

import Header from './components/header'
import TextArea from './components/TextArea'
import ShowArea from './components/ShowArea'

function App() {
	return (
		<>
			<Header />
			<main className='flex w-full justify-center px-4'>
				<div className='grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_192px]'>
					<TextArea placeholder='Write or paste your text here' />
					<ShowArea text='Hello **world**!' loading />
					<Controls />
				</div>
			</main>
		</>
	)
}

export default App
