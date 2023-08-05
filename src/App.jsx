import { useState } from 'react';
import { Footer } from './Components/Footer';
import { Fruits } from './Components/Fruits';
import { Header } from './Components/Header';
import { MainSection } from './MainSection';

function App() {
	const [activePage, setActivePage] = useState('Drinks');
	return (
		<>
			<Fruits />
			<Header />
			<MainSection activePage={activePage} setActivePage={setActivePage} />
			<Footer activePage={activePage} setActivePage={setActivePage} />
		</>
	);
}

export default App;
