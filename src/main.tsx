import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n/i18n'
import App from './App'
import './index.css'
import { AppProvider } from './context/App.context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <AppProvider> */}
      <App />
      {/* </AppProvider> */}
      {/* </QueryClientProvider> */}
    </BrowserRouter>
  </React.StrictMode>
)
