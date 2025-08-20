import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { makeServer } from './Data/Mirage.ts'

// main.tsx
if (import.meta.env.MODE === "development" || import.meta.env.MODE === "production") {
  makeServer();
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
