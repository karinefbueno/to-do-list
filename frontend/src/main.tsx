import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './style/global';

import App from './App';
import Provider from './context/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</Provider>,
);
