import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IdTokenProvider } from './components/ContextAPI/IdToken';
import './index.css';
import App from './App';
import { AuthContextProvide } from './pages/ContextApi';

ReactDOM.render(
  <AuthContextProvide>
  <IdTokenProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </IdTokenProvider>
  </AuthContextProvide>,
  document.getElementById('root')
);
