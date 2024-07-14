import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import CalendarComponent from './components/Calendar ';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/calendar' element={<CalendarComponent />} />
			</Routes>
		</>
	);
}

export default App;
