import { Outlet } from 'react-router-dom';
import './App.scss';
import FooterTemplates from './components/templates/FooterTemplates';
import NavbarTemplate from './components/templates/NavbarTemplate';

function App() {
	return (
		<>
			<NavbarTemplate />
			<Outlet />
			<FooterTemplates />
		</>
	);
}

export default App;
