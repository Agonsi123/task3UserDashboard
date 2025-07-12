import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Index from './context/Index.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Index>
  </StrictMode>
);
