import 'react-reflex/styles.css'
import type { NextPage } from 'next'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import Layout from '../components/Layout'
import WebsiteContext from '../hooks/useWebsiteContext'
import { useState } from 'react'
import EditorArea from '../components/Editor/EditorArea'
import { TEditorState, initialEditorState, TSidebarLinks, TQueryState } from '../global'
import Sidebar from '../components/Sidebar/Sidebar'
import ResultsArea from '../components/Result/ResultsArea'
import Head from 'next/head'

const Home: NextPage = () => {
	const [editorState, setEditorState] = useState<TEditorState>(initialEditorState)
	const [selectedQueryIndex, setSelectedQueryIndex] = useState<number>(0)
	const [selectedSidebar, setSelectedSidebar] = useState<TSidebarLinks>('queries')
	const [queryState, setQueryState] = useState<TQueryState>('idle')

	return (
		<WebsiteContext.Provider
			value={{
				editorState,
				setEditorState,
				selectedSidebar,
				setSelectedSidebar,
				selectedQueryIndex,
				setSelectedQueryIndex,
				queryState,
				setQueryState
			}}
		>
			<Layout showSidebar={true}>
				<ReflexContainer orientation='vertical' className='h-full'>
					<ReflexElement minSize={300} size={320} maxSize={350}>
						<Sidebar />
					</ReflexElement>

					<ReflexSplitter />

					<ReflexElement>
						<ReflexContainer orientation='horizontal'>
							<ReflexElement>
								<EditorArea />
							</ReflexElement>

							<ReflexSplitter />

							<ReflexElement minSize={350} size={400} maxSize={450}>
								<ResultsArea />
							</ReflexElement>
						</ReflexContainer>
					</ReflexElement>
				</ReflexContainer>
			</Layout>

			<Head>
				<title>SQL Editor by Afnan</title>
				<meta name='description' content='A Frontend focused SQL editor to execute SQL queries' />
			</Head>
		</WebsiteContext.Provider>
	)
}

export default Home
