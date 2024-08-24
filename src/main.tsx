import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/ThemeProvider'


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Button>Test</Button>
    </ThemeProvider>
  </React.StrictMode>,
)
