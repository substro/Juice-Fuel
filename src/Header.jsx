import { NavBar } from './NavBar';

export const Header = () => {
	return (
		<header className="header">
			<a href="./index.html">
				<img src="./src/assets/images/logo.png" alt="logo" className="logo" />
			</a>

			<NavBar />
		</header>
	);
};
