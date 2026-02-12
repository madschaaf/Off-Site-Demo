import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { StepByStep } from './app/components/StepByStep.tsx'
import './styles/index.css'
import './styles/tailwind.css'
import './styles/fonts.css'
import './styles/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StepByStep />
    </BrowserRouter>
  </StrictMode>,
)
