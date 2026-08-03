import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootEl = document.getElementById('root')
try {
  console.log('[vite-react] Mounting app...')
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  console.log('[vite-react] App mounted.')
} catch (err) {
  console.error('[vite-react] Failed to mount:', err)
  if (rootEl) {
    rootEl.innerHTML = `<div style="max-width:640px;margin:2rem auto;color:#c9d1d9;font-family:Inter,sans-serif;text-align:center">
      <h2>Failed to load the app</h2>
      <p>${String(err)}</p>
      <p>Open DevTools (F12) → Console for details.</p>
    </div>`
  }
}
