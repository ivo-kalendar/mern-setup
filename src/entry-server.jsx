import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './ssr/App'

export function render() {
    const head = renderToString(
        // Render Dynamic Head Elements
    )
    
    const html = renderToString(
        <StrictMode>
            <App />
        </StrictMode>
    )
    return { html, head }
}