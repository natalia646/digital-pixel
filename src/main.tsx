import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Roots } from './Roots.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Roots />
  </StrictMode>,
)
