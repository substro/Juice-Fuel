import { Footer } from './Components/Footer'
import { MainSection } from './MainSection'
import { Header } from './Components/Header'
import { Fruits } from './Components/Fruits'
import { useState } from 'react'

function App() {
	const [activePage, setActivePage] = useState('Drinks')
	return (
		<>
			<Fruits />
			<Header />
			<MainSection activePage={activePage} setActivePage={setActivePage} />
			<Footer activePage={activePage} setActivePage={setActivePage} />
		</>
	)
}

export default App
