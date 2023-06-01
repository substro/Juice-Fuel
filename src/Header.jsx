import Nav from './Nav';

export const Header = () => {
	return (
		<header className="header">
			<a href="./index.html">
				<img src="./src/assets/images/logo.png" alt="logo" className="logo" />
			</a>
			<Nav />
		</header>
	);
};
