import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { StrictMode } from 'react'
import App from '../components/App'

export function render() {
    const head = renderToString(
        // Render Dynamic Head Elements
    )
    
    const html = renderToString(
        <StrictMode>
            <StaticRouter>
                <App />
            </StaticRouter>
        </StrictMode>
    )
    return { html, head }
}