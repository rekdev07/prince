import './App.css'

import { FolderGit2, Sun } from 'lucide-react'

import useEnhancedText from './hooks/useEnhancedText'

import Controls from './components/Controls'
import { Header, HeaderButton } from './components/header'
import TextArea from './components/TextArea'
import ShowArea from './components/ShowArea'

function App() {
	const { enhanceText, loading, result } = useEnhancedText()

	const onTypeFinishedHander = (v: string | undefined) => {
		if (!loading) enhanceText(v)
	}

	return (
		<>
			<Header>
				<HeaderButton
					type='link'
					href='https://github.com/rekdev07/prince'
					target='_blank'
				>
					<FolderGit2 />
				</HeaderButton>
				<HeaderButton>
					<Sun />
				</HeaderButton>
			</Header>
			<main className='flex w-full justify-center px-4'>
				<div className='grid h-fit w-full max-w-6xl grid-cols-1 items-end gap-6 md:grid-cols-[1fr_1fr_192px]'>
					<TextArea
						placeholder='Write or paste your text here'
						onTypeFinished={onTypeFinishedHander}
						onTypeFinishedTimeout={1000}
					/>
					<ShowArea
						text={result?.ok ? result?.enhancedText : result?.error}
						loading={loading}
					/>
					<Controls />
				</div>
			</main>
		</>
	)
}

export default App
