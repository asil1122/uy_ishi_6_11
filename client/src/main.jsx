import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/query-client.js'
import { createRoot } from 'react-dom/client'
import { theme } from './config/mui-config.js'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <App />
                <CssBaseline />
            </BrowserRouter>
        </QueryClientProvider>
    </ThemeProvider>
)
